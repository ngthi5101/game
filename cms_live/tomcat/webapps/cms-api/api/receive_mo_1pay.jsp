<%@page contentType="text/html; charset=UTF-8"%>
<%@page import="java.io.*"%>
<%@page import="java.sql.*"%>
<%@page import="java.net.*"%>
<%@page import="java.util.*"%>
<%@page import="com.ftl.sql.*"%>
<%@page import="com.ftl.util.*"%>
<%@page import="com.ftl.wak.*"%>
<%@page import="com.ftl.wak.mgr.*"%>
<%@page import="com.ftl.wak.html.*"%>
<%@page import="com.ftl.wak.model.*"%>
<%@page import="com.ftl.dictionary.*"%>
<%@page import="com.ftl.dictionary.Dictionary"%>
<%@page import="com.ftl.thread.*"%>
<%@page import="com.ftl.game.*"%>
<%@page import="com.ftl.game.network.*"%>
<%@page import="java.security.*"%>
<%@page import="javax.crypto.Mac"%>
<%@page import="javax.crypto.spec.SecretKeySpec"%>
<%request.setAttribute(com.ftl.wak.ActionFilter.ATTRIBUTE_EXCLUDE_LAYOUT,Boolean.TRUE);%>
<%!
	static String SYSTAX_ERROR="Loi cu phap, vui long thu lai!";
	static String PHONE_EXIST="So thue bao da duoc dang ky cho tai khoan khac!";
	static String PLAYER_NOT_EXIST="Ma xac nhan khong chinh xac, vui long thu lai!";
	static String	PHONE_NOT_EXIST="So dien thoai cua ban chua duoc cap nhat cho bat ky tai khoan nao, vui long cap nhat so dien thoai vao tai khoan cua ban";
	public String receivedMO(
			String sender, String recipient, String command, String content) throws Exception
	{		
		if(sender != null)
			sender = sender.replaceAll("^(84|04|08|0)?(.*)$","$2");
		if(content != null)
			content = content.replaceAll("( )+"," ");
		content = content.toLowerCase();
		String result;
		Connection cn = null;
		try
		{
			cn = GU.createConnection();
			if(command.equalsIgnoreCase("ta"))
			{
				String subContent=content.split(" ")[1];
				String data=content.split(" ")[2];
				if("mk".equals(subContent))
					result=createNewPassWord(cn,sender,data);
				else
					result=updatePhoneNumber(cn,sender,data);
			}
			else
				result=verifyExchange(cn,sender);
		}
		catch(Exception ex)
		{
			String reason = GU.dic.getChild("Error").getString(ex,false);
			if(reason == null || reason.equals(""))
				reason = ex.getMessage();
			throw new Exception(reason,ex);
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
			if (keyString != null && keyString.length() > 0)
			{
				SecretKeySpec key = new SecretKeySpec((keyString).getBytes("UTF-8"), algo);
				Mac mac = Mac.getInstance(algo);
				mac.init(key);
				byte[] bytes = mac.doFinal(msg.getBytes("ASCII"));
				StringBuffer hash = new StringBuffer();
				for (int i = 0; i < bytes.length; i++)
				{
					String hex = Integer.toHexString(0xFF & bytes[i]);
					if (hex.length() == 1)
						hash.append('0');
					hash.append(hex);
				}
				digest = hash.toString();
			}
		}
		catch (Exception e)
		{
		}
		return digest;
    }
	public String generateSignature(String access_key, String command,
      String mo_message, String msisdn, String request_id,
      String request_time, String short_code, String secret) {
     String urlParameters = "";
     String signature = "";
     if ((command != null) && (mo_message != null) && (msisdn != null) 
       && (request_id != null) && (request_time != null)
       && (short_code != null) && (secret != null)) {
      urlParameters = "access_key=%access_key%&command=%command%"
        + "&mo_message=%mo_message%&msisdn=%msisdn%"
        + "&request_id=%request_id%&request_time=%request_time%"
        + "&short_code=%short_code%";
      urlParameters = urlParameters.replaceFirst("%access_key%", access_key);
      urlParameters = urlParameters.replaceFirst("%command%", command);
      urlParameters = urlParameters.replaceFirst("%mo_message%", mo_message);
      urlParameters = urlParameters.replaceFirst("%msisdn%", msisdn);
      urlParameters = urlParameters.replaceFirst("%request_id%", request_id);
      urlParameters = urlParameters.replaceFirst("%request_time%", request_time);
      urlParameters = urlParameters.replaceFirst("%short_code%", short_code);
      signature = hmacDigest(urlParameters, secret, "HmacSHA256");
     }
     return signature;
    }

	public static String updatePhoneNumber(Connection cn,String phone,String token) throws Exception
	{
		String result;
		if(token==null||token.equals(""))
			throw new Exception(SYSTAX_ERROR);
		String sql= "select token.player_id,nick_name from token,player"
					+ " where code='"+StringEscapeUtil.escapeSql(token)+"'"
					+ "		and token.player_id=player.player_id";
		List<List<String>> playerInfo=Database.executeQuery(cn, sql);
		if(playerInfo==null||playerInfo.size()<=0)
			throw new Exception(PLAYER_NOT_EXIST);
		sql="select count(*) from player where phone='"+StringEscapeUtil.escapeSql(phone)+"'";
		Integer numberOfPhone=Integer.valueOf(Database.getValueEx(cn, sql));
		if(numberOfPhone >= 3)
			throw new Exception(PHONE_EXIST);
		sql="update player set phone='"+StringEscapeUtil.escapeSql(phone)+"',phone_verify=1"
			+ "	where player_id="+playerInfo.get(0).get(0);
		Database.executeUpdate(cn, sql);
		result="Chuc mung ban da cap nhat thanh cong so dien thoai "+phone+ " cho tai khoan "+playerInfo.get(0).get(1);

		ThreadManager mgr = ThreadManager.getInstance();
		PlayerManager pm = PlayerManager.getInstance();
		Player player = pm.loadPlayerDetail(cn,playerInfo.get(0).get(1));
		TransManager tm = TransManager.getInstance();
		long transId = tm.initTrans(cn,tm.getTransType("FREE_RECHARGE"),
									player.getNickName(),12_000,"Tặng Vàng cho tài khoản mới kích hoạt");
		tm.addTransPlayer(cn,transId,player);
		tm.setTransAttr(cn,transId,"CURRENCY",String.valueOf(GU.CURRENCY_CHIP));
		tm.transfer(cn,transId,PlayerManager.getInstance().getGameProvider(),
					player,12_000,GU.CURRENCY_CHIP,"Tặng Vàng cho tài khoản kích hoạt kích hoạt",false);
		tm.commitTrans(cn,transId);

		ClientManager cm = (ClientManager)mgr.getManageableBean("ClientManager");
		Client client = cm.getIdentifiedClient(player.getNickName());
		if(client != null)
			player.retrieveAccountBalance(cn,client);

		String gmNickName = PlayerManager.getInstance().getGameProvider().getNickName();
		PMHelper.createMessage(gmNickName, player.getNickName(), "Tặng 12k Vàng cho tài khoản mới kích hoạt số điện thoại");
		return result;
	}

	public static String verifyExchange(Connection cn,String phone) throws Exception
	{
		String sql="select nick_name from player where phone='"+phone+"' and rownum=1";
		String nickName=Database.getValueEx(cn, sql);
		if(nickName==null||"".equals(nickName))
			throw new Exception(PHONE_NOT_EXIST);
		Player player = PlayerManager.getInstance().loadPlayerBasic(cn, nickName);
		return "Ma OTP cua ban la: "+getToken(cn,player);
	}
	public static String createNewPassWord(Connection cn,String phone,String nickName) throws Exception{
		Player player = PlayerManager.getInstance().loadPlayerBasic(cn, nickName);
		if(player==null)
			throw new Exception("Nguoi choi "+nickName+" khong ton tai");
		if(phone==null||!phone.equals(player.getPhone()))
			throw new Exception("So dien thoai cua ban khong dung, vui long kiem tra va cap nhat lai so dien thoai tai https://thanbai888.com/game/profile/update_profile.jsp");
		String newPassword = java.lang.String.valueOf(new java.util.Random().nextInt((9999 - 1000) + 1) + 1000).substring(0,4);
	  String passwordEncoded = com.ftl.game.MD5.hash(newPassword);
	  List<String> params = new ArrayList();
	  params.add(passwordEncoded);
	  params.add(nickName);
	  com.ftl.sql.Database.executeUpdate(cn,
	   "UPDATE player SET password = ? WHERE nick_name = ?", params);
	  
	  return "Mat khau cua ban la: "+newPassword;
	}
	static String getToken(Connection cn,Player player) throws Exception{
		String tokenCode;
		String sql="select code from token where player_id="+player.getId()+" and EXPIRED_TIME>= sysdate";
		tokenCode=Database.getValueEx(cn, sql);
		if(tokenCode==null || "".equals(tokenCode)){
			while(true){
				tokenCode= java.lang.Long.toOctalString((long) (java.lang.Math.random() * 10000));
				sql="SELECT 1 FROM TOKEN WHERE PLAYER_ID="+player.getId()+" AND CODE='"+tokenCode+"'";
				String checkExist=Database.getValueEx(cn, sql);
				if(checkExist==null || "".equals(checkExist)){
					sql="INSERT INTO TOKEN(PLAYER_ID,CODE,EXPIRED_TIME) VALUES ("+player.getId()+",'"+tokenCode+"',sysdate+1/96)";
					Database.executeUpdate(cn, sql);
					break;
				}
			}
		}
		return tokenCode;
	}
%>
<%
//	Map<String,String> partnerSignKeysByPartner = new HashMap<String, String>();
//	List<String> allowedIps = new LinkedList<String>();
//	allowedIps.add("127.0.0.1");
//	allowedIps.add("113.190.227.166");
//    allowedIps.add("27.72.56.28");
	try
	{
//		String remoteAddress = request.getHeader("X-FORWARDED-FOR");  
//		if(remoteAddress == null)  
//			remoteAddress = request.getRemoteAddr();  
//		if(remoteAddress == null || !allowedIps.contains(remoteAddress))
//			throw new Exception("Your ip (" + remoteAddress + ") is not a trusted ip.");
		String access_key = request.getParameter("access_key");
		String command = request.getParameter("command");
		String mo_message = request.getParameter("mo_message");
		String msisdn = request.getParameter("msisdn");
		String request_id = request.getParameter("request_id");
		String request_time = request.getParameter("request_time");
		String short_code = request.getParameter("short_code");
		String signature = request.getParameter("signature");
		
		List listParams = new ArrayList();
		listParams.add("access_key="+access_key);
		listParams.add("command="+command);
		listParams.add("mo_message="+mo_message);
		listParams.add("msisdn="+msisdn);
		listParams.add("request_id="+request_id);
		listParams.add("request_time="+request_time);
		listParams.add("short_code="+short_code);
		String signSource = StringUtil.join(listParams, "&");
		Map Secrets=new HashMap();
		Secrets.put("dt","t6x659m9zf5xh4sfqxvhs5etcmh8k6yx");
		Secrets.put("ta","8rnqnyefl5uz68r50ycy81tl4xhry4pp");
		String secret=Secrets.get(command).toString();
		String ourSign=generateSignature(access_key,command,mo_message, msisdn, request_id,request_time, short_code, secret);
		Map result = new HashMap();
		result.put("status","1");
		result.put("type","text");
		if(!ourSign.equals(signature))
			throw new Exception(SYSTAX_ERROR);
		result.put("sms",receivedMO(msisdn,short_code,command,mo_message));
		out.println(new com.google.gson.Gson().toJson(result));
	}
	catch(Exception ex)
	{
		ex.printStackTrace();
		Map result = new HashMap();
		result.put("status","0");
		result.put("type","text");
		result.put("sms", ex.getMessage());
		out.println(new com.google.gson.Gson().toJson(result));
	}
%>