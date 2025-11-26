<%@page import="java.security.*"%><%@page import="javax.crypto.Mac"%><%@page import="javax.crypto.spec.SecretKeySpec"%><%@page contentType="text/html; charset=UTF-8"%><%@include file="/include/import.jsp" %><%@page import="com.ftl.dictionary.Dictionary"%><%@page import="com.ftl.game.*"%><%@page import="com.ftl.game.network.*,java.nio.charset.StandardCharsets"%><%request.setAttribute(com.ftl.wak.ActionFilter.ATTRIBUTE_EXCLUDE_LAYOUT,Boolean.TRUE);%><%!
	static String SYSTAX_ERROR = "Loi cu phap, vui long thu lai!";
	static String PHONE_EXIST = "So thue bao da duoc dang ky cho tai khoan khac!";
	static String PLAYER_NOT_EXIST = "Người chơi không đúng, vui lòng kiểm tra lại!";
	static String PHONE_NOT_EXIST = "So dien thoai cua ban chua duoc cap nhat cho bat ky tai khoan nao, vui long cap nhat so dien thoai vao tai khoan cua ban";
	static String AMOUNT_NOT_CONFIG= "Mệnh giá tiền chưa được cấu hình";
	public String recharge(
			Connection cn, Player player, String phone, String amount,
			String keyword, String messageTemplate) throws Exception
	{
		long value = Long.valueOf(amount);
		if(value<5000)
			throw new Exception(AMOUNT_NOT_CONFIG);
		long transAmount;
		DictionaryNode epayConfig = TransManager.getInstance().getConfig().getChild("RechargeBySMS");
		double rate = Double.valueOf(epayConfig.getString("Rate"));
		transAmount = (long) (value * rate);
		long additionValue = 0;
		{
			DictionaryNode denominationNodeList = epayConfig.getChild("Denomination");
			for(DictionaryNode denominationNode : denominationNodeList.getChildList())
			{
				long denomination = Long.valueOf(denominationNode.getNodeName());
				double addition = Double.valueOf(denominationNode.getValue());
				additionValue = (long) (transAmount * addition);
				if(denomination >= value)
					break;
			}
			transAmount += additionValue;
			String result = messageTemplate;
			result = StringUtil.replaceAll(result, "$win$", String.valueOf(transAmount));
			result = StringUtil.replaceAll(result, "$number$", amount);
			result = StringUtil.replaceAll(result, "$keyword$", keyword);
			result = StringUtil.replaceAll(result, "$userName$", player.getNickName());
			String message = GU.dic.getString("Recharge.Completed", new String[]
									  {
										  String.valueOf(transAmount)
			});
			message = phone + " " + message;
			long transId = player.recharge(cn, "RECHARGE", transAmount, com.ftl.game.GU.CURRENCY_CHIP, message);
			TransManager transManager = TransManager.getInstance();
			transManager.setTransAttr(cn, transId, "TARGET", "1Pay_9029");
			transManager.setTransAttr(cn, transId, "CARD_AMOUNT", String.valueOf(amount));
			transManager.setTransAttr(cn, transId, "MONEY_VALUE", String.valueOf(amount));
			transManager.commitTrans(cn, transId);
			String gmNickName = PlayerManager.getInstance().getGameProvider().getNickName();
			PMHelper.createMessage(gmNickName, player.getNickName(), message);
			cn.commit();
			return result;
		}
	}

	public String receivedMO(String phone, String amount, String mo_message) throws Exception
	{
		if(phone != null)
			phone = phone.replaceAll("^(84|04|08|0)?(.*)$", "$2");
		String result = "";
		Connection cn=null;
		try
		{
			cn=GU.createConnection();
			String cmdArray[] = mo_message.toLowerCase().split(" ");
			String nickName = cmdArray[2];
			Player player=PlayerManager.getInstance().loadPlayerDetail(cn, nickName);
			if(player==null)
				throw new Exception(PLAYER_NOT_EXIST);
			result = recharge(cn, player, phone, amount, "", GU.dic.getString("Recharge.NAP"));
		}
		catch(Exception ex)
		{
			String reason = GU.dic.getChild("Error").getString(ex, false);
			if(reason == null || reason.equals(""))
				reason = ex.getMessage();
			throw new Exception(reason, ex);
		}
		finally
		{
			Database.closeObject(cn);
		}
		return result;
	}

	public static String hmacDigest(String msg, String keyString, String algo)
	{
		String digest = "";
		try
		{
			if(keyString != null && keyString.length() > 0)
			{
				SecretKeySpec key = new SecretKeySpec(
						(keyString).getBytes("UTF-8"), algo);
				Mac mac = Mac.getInstance(algo);
				mac.init(key);
				byte[] bytes = mac.doFinal(msg.getBytes("ASCII"));
				StringBuffer hash = new StringBuffer();
				for(int i = 0; i < bytes.length; i++)
				{
					String hex = Integer.toHexString(0xFF & bytes[i]);
					if(hex.length() == 1)
					{
						hash.append('0');
					}
					hash.append(hex);
				}
				digest = hash.toString();
			}
		}
		catch(UnsupportedEncodingException e)
		{
		}
		catch(InvalidKeyException e)
		{
		}
		catch(NoSuchAlgorithmException e)
		{
		}
		return digest;
	}

	public String generateSignature(String access_key, String amount,
									String command_code, String error_code, String error_message,
									String mo_message, String phone, String request_id,
									String request_time, String secret)
	{
		String urlParameters = "";
		String signature = "";
		if(access_key != null && amount != null && command_code != null
				&& error_code != null && error_message != null
				&& mo_message != null && phone != null && request_id != null
				&& request_time != null && secret != null)
		{
			urlParameters = "access_key=%access_key%&amount=%amount%&command_code=%command_code%"
					+ "&error_code=%error_code%&error_message=%error_message%&mo_message=%mo_message%"
					+ "&msisdn=%msisdn%&request_id=%request_id%&request_time=%request_time%";
			urlParameters = urlParameters.replaceFirst("%access_key%", access_key);
			urlParameters = urlParameters.replaceFirst("%amount%", amount);
			urlParameters = urlParameters.replaceFirst("%command_code%", command_code);
			urlParameters = urlParameters.replaceFirst("%error_code%", error_code);
			urlParameters = urlParameters.replaceFirst("%error_message%", error_message);
			urlParameters = urlParameters.replaceFirst("%mo_message%", mo_message);
			urlParameters = urlParameters.replaceFirst("%msisdn%", phone);
			urlParameters = urlParameters.replaceFirst("%request_id%", request_id);
			urlParameters = urlParameters.replaceFirst("%request_time%", request_time);
			signature = hmacDigest(urlParameters, secret, "HmacSHA256");
			System.out.println("Signature:" + signature);
		}
		return signature;
	}

%><%
	try
	{
		String access_key = request.getParameter("access_key");
		String amount = request.getParameter("amount");
		String command_code = request.getParameter("command_code");
		String error_code = request.getParameter("error_code");
		String error_message = request.getParameter("error_message");
		String mo_message = request.getParameter("mo_message");
		String msisdn = request.getParameter("msisdn");
		String request_id = request.getParameter("request_id");
		String request_time = request.getParameter("request_time");
		String signature = request.getParameter("signature");

		List listParams = new ArrayList();
		listParams.add("access_key=" + access_key);
		listParams.add("amount=" + amount);
		listParams.add("command_code=" + command_code);
		listParams.add("error_code=" + error_code);
		listParams.add("error_message=" + error_message);
		listParams.add("mo_message=" + mo_message);
		listParams.add("msisdn=" + msisdn);
		listParams.add("request_id=" + request_id);
		listParams.add("request_time=" + request_time);
		String signSource = StringUtil.join(listParams, "&");
		Map Secrets = new HashMap();
		Secrets.put("kenh1", "8rnqnyefl5uz68r50ycy81tl4xhry4pp");
		Secrets.put("kenh2", "t6x659m9zf5xh4sfqxvhs5etcmh8k6yx");
		String secret = Secrets.get("kenh1").toString();
		String ourSign = generateSignature(access_key, amount, command_code, error_code, error_message, mo_message, msisdn, request_id, request_time, secret);
		if(!ourSign.equals(signature))
			throw new Exception(SYSTAX_ERROR);
		Map result = new HashMap();
		result.put("status", "1");
		result.put("type", "text");
		result.put("sms", receivedMO(msisdn, amount, mo_message));
		out.println(new com.google.gson.Gson().toJson(result));
	}
	catch(Exception ex)
	{
		ex.printStackTrace();
		Map result = new HashMap();
		result.put("status", "0");
		result.put("type", "text");
		result.put("sms", ex.getMessage());
		out.println(new com.google.gson.Gson().toJson(result));
	}
%>