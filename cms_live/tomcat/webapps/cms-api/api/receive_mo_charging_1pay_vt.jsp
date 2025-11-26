<%@page import="java.security.*"%><%@page import="javax.crypto.Mac"%><%@page import="javax.crypto.spec.SecretKeySpec"%><%@page contentType="text/html; charset=UTF-8"%><%@include file="/include/import.jsp" %><%@page import="com.ftl.dictionary.Dictionary"%><%@page import="com.ftl.game.*"%><%@page import="com.ftl.game.network.*,java.nio.charset.StandardCharsets"%><%request.setAttribute(com.ftl.wak.ActionFilter.ATTRIBUTE_EXCLUDE_LAYOUT, Boolean.TRUE);%><%!
	static String SYSTAX_ERROR = "Loi cu phap, vui long thu lai!";
	static String PHONE_EXIST = "So thue bao da duoc dang ky cho tai khoan khac!";
	static String PLAYER_NOT_EXIST = "Người chơi không đúng, vui lòng kiểm tra lại!";
	static String PHONE_NOT_EXIST = "So dien thoai cua ban chua duoc cap nhat cho bat ky tai khoan nao, vui long cap nhat so dien thoai vao tai khoan cua ban";
	static String AMOUNT_NOT_CONFIG = "Mệnh giá tiền chưa được cấu hình";

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

	public String generateSignature(String access_key, String amount, String command_code, String mo_message, String msisdn, String telco, String secret)
	{
		String urlParameters = "";
		String signature = "";
		if((access_key != null) && (amount != null) && (command_code != null)
				&& (mo_message != null) && (msisdn != null)
				&& (telco != null) && (secret != null))
		{
			urlParameters = "access_key=%access_key%&amount=%amount%"
					+ "&command_code=%command_code%&mo_message=%mo_message%"
					+ "&msisdn=%msisdn%&telco=%telco%";
			urlParameters = urlParameters.replaceFirst("%access_key%", access_key);
			urlParameters = urlParameters.replaceFirst("%amount%", amount);
			urlParameters = urlParameters.replaceFirst("%command_code%", command_code);
			urlParameters = urlParameters.replaceFirst("%mo_message%", mo_message);
			urlParameters = urlParameters.replaceFirst("%msisdn%", msisdn);
			urlParameters = urlParameters.replaceFirst("%telco%", telco);
			signature = hmacDigest(urlParameters, secret, "HmacSHA256");
		}
		return signature;
	}
%><%
	try
	{
		String access_key = request.getParameter("access_key");
		String amount = request.getParameter("amount");
		String command_code = request.getParameter("command_code");
		String mo_message = request.getParameter("mo_message");
		String msisdn = request.getParameter("msisdn");
		String telco = request.getParameter("telco");
		String signature = request.getParameter("signature");

		List listParams = new ArrayList();
		listParams.add("access_key=" + access_key);
		listParams.add("amount=" + amount);
		listParams.add("command_code=" + command_code);
		listParams.add("mo_message=" + mo_message);
		listParams.add("msisdn=" + msisdn);
		listParams.add("telco=" + telco);
		String signSource = StringUtil.join(listParams, "&");
		System.out.println("signSource:"+signSource);
		Map Secrets = new HashMap();
		Secrets.put("kenh1", "8rnqnyefl5uz68r50ycy81tl4xhry4pp");
		Secrets.put("kenh2", "t6x659m9zf5xh4sfqxvhs5etcmh8k6yx");
		String secret = Secrets.get("kenh1").toString();
		String ourSign = generateSignature(access_key, amount, command_code, mo_message, msisdn, telco, secret);
		Map result = new HashMap();
		if(!ourSign.equals(signature))
			throw new Exception(SYSTAX_ERROR);
		Player player = null;
		Connection cn = null;
		try
		{
			cn = GU.createConnection();
			player = PlayerManager.getInstance().loadPlayerDetail(cn, mo_message.toLowerCase().split(" ")[2]);
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
		if(player == null)
			throw new Exception(PLAYER_NOT_EXIST);
		if(Long.valueOf(amount) < 5000)
			throw new Exception(AMOUNT_NOT_CONFIG);
		result.put("status", "1");
		result.put("type", "text");
		result.put("sms", "Hệ thống đã nhận được yêu cầu của bạn, vui lòng chờ hệ thống xử lý");
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