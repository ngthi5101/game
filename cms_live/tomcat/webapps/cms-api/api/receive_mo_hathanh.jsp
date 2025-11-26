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
<%@page import="org.apache.http.client.utils.*"%>
<%request.setAttribute(com.ftl.wak.ActionFilter.ATTRIBUTE_EXCLUDE_LAYOUT,Boolean.TRUE);%>
<%!
	/**
	 * 
	 * @param cn
	 * @param player
	 * @param sender
	 * @param serviceNumber
	 * @param keyword
	 * @param messageTemplate
	 * @return
	 * @throws Exception 
	 */
	public String recharge(
			Connection cn,Player player,String sender,String serviceNumber,
			String keyword,String messageTemplate) throws Exception
	{
		char n = serviceNumber.charAt(1);
		long amount;
		String ca;
		String rn;
		if (n == '6')
		{
			amount = 1000;
			ca = "10000";
			rn = "5000";
		}
		else if (n == '7')
		{
			amount = 1800;
			ca = "15000";
			rn = "7500";
		}
		else
		{
			amount = 500;
			ca = "500";
			rn = "0";
		}
		String result = messageTemplate;
		result = StringUtil.replaceAll(result, "$win$", String.valueOf(amount));
		result = StringUtil.replaceAll(result, "$number$", serviceNumber);
		result = StringUtil.replaceAll(result, "$keyword$", keyword);
		result = StringUtil.replaceAll(result, "$userName$", player.getNickName());
		String message = GU.dic.getString("Recharge.Completed",new String[]{String.valueOf(amount)});
		message = sender + " " + message;
		long transId = player.recharge(cn,"RECHARGE",amount,com.ftl.game.GU.CURRENCY_CHIP,message);
		TransManager transManager = TransManager.getInstance();
		transManager.setTransAttr(cn,transId,"TARGET","SMS");
		transManager.setTransAttr(cn,transId,"SERVICE_NUMBER",serviceNumber);
		transManager.setTransAttr(cn,transId,"MSISDN",sender);
		transManager.setTransAttr(cn,transId,"CARD_AMOUNT",ca);
		transManager.setTransAttr(cn,transId,"MONEY_VALUE",rn);
		transManager.commitTrans(cn,transId);
		String gmNickName = PlayerManager.getInstance().getGameProvider().getNickName();
		PMHelper.createMessage(gmNickName,player.getNickName(),message);
		cn.commit();
		return result;
	}

	/**
	 * 
	 * @param connection
	 * @param userName
	 * @param password
	 * @throws Exception 
	 */
	public void updatePassword(Connection connection, String userName, String password) throws Exception
	{
		PreparedStatement prepareStatement = null;
		try
		{
			String sql = "update player set password = ? where nick_name = ?";
			prepareStatement = connection.prepareStatement(sql);
			prepareStatement.setString(1, password);
			prepareStatement.setString(2, userName);
			prepareStatement.execute();
			connection.commit();
		}
		finally
		{
			Database.closeObject(prepareStatement);
		}
	}

	/**
	 * 
	 * @param connection
	 * @param id
	 * @param msisdn
	 * @param nickName
	 * @throws Exception 
	 */
	public void playerRegistered(Connection connection,long id,String msisdn,String nickName) throws Exception
	{
		if(msisdn.startsWith("84"))
			msisdn = msisdn.substring(2);
		if(msisdn.startsWith("0"))
			msisdn = msisdn.substring(1);
		String sql =
			"DECLARE\n" +
			"	v_player_id   VARCHAR2 (30) := '" + id + "';\n" +
			"	v_nick_name   VARCHAR2 (30) := '" + StringEscapeUtil.escapeSql(nickName) + "';\n" +
			"	v_msisdn	  VARCHAR2 (30) := '" + StringEscapeUtil.escapeSql(msisdn) + "';\n" +
			"	CURSOR c IS SELECT player_id FROM invite_log where msisdn like '%' || v_msisdn and status=0;\n" +
			"	v_master_id   NUMBER (10);\n" +
			"	v_inviter	  NUMBER (10);\n" +
			"	v_amount	  NUMBER (10) := 300;\n" +
			"BEGIN\n" +
			"	SELECT player_id INTO v_master_id FROM player WHERE nick_name = 'gamevh.net';\n" +
			"	FOR r IN c LOOP\n" +
			"		IF v_inviter IS NULL THEN\n" +
			"			UPDATE player SET balance = balance - v_amount WHERE player_id = v_master_id;\n" +
			"			UPDATE player SET balance = balance + v_amount WHERE player_id = r.player_id;\n" +
			"			UPDATE player SET referer_id = r.player_id WHERE player_id = v_player_id;\n" +
			"			v_inviter := r.player_id;\n" +
			"			INSERT INTO pm (pm_id, sender, recipient, content)\n" +
			"			VALUES (seq_pm.NEXTVAL, v_master_id, r.player_id,\n" +
			"					   'gamevh.net: ban duoc tang ' || v_amount || ' phinh vi da moi '\n" +
			"					|| v_nick_name || ' choi game. Cam on ban rat nhieu.');\n" +
			"		ELSE\n" +
			"			INSERT INTO pm (pm_id, sender, recipient, content)\n" +
			"			VALUES (seq_pm.NEXTVAL, v_master_id, r.player_id,\n" +
			"					   'gamevh.net: ' || v_nick_name\n" +
			"					|| ' da nhan loi moi tu mot nguoi choi khac. Moi ban tiep tuc choi va ung ho gamevh.net.');\n" +
			"		END IF;\n" +
			"	END LOOP;\n" +
			"	update invite_log set status=1 where msisdn like '%' || v_msisdn;\n" +
			"END;";
		try
		{
			Database.executeUpdate(connection,sql);
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
		}
	}

	/**
	 * 
	 * @param connection
	 * @param phone
	 * @throws Exception 
	 */
	public String getNickNameByPhone(Connection connection, String phone) throws Exception
	{
		PreparedStatement prepareStatement = null;
		ResultSet rs = null;
		try
		{
			String sql = "select nick_name from player where phone = ? order by created desc";
			prepareStatement = connection.prepareStatement(sql);
			prepareStatement.setString(1, phone);
			rs = prepareStatement.executeQuery();
			if(rs.next())
				return rs.getString(1);
			return null;
		}
		finally
		{
			Database.closeObject(rs);
			Database.closeObject(prepareStatement);
		}
	}

	/**
	 * 
	 * @param connection
	 * @param phone
	 * @throws Exception 
	 */
	public String getPlayerPhone(Connection connection, String nickName) throws Exception
	{
		PreparedStatement prepareStatement = null;
		ResultSet rs = null;
		try
		{
			String sql = "select phone from player where nick_name = ?";
			prepareStatement = connection.prepareStatement(sql);
			prepareStatement.setString(1, nickName.toLowerCase());
			rs = prepareStatement.executeQuery();
			if(rs.next())
				return rs.getString(1);
			return null;
		}
		finally
		{
			Database.closeObject(rs);
			Database.closeObject(prepareStatement);
		}
	}

	/**
	 * 
	 * @param length
	 * @return 
	 */
	private String createRandomPassword(int length)
	{
		String digis = "0123456789";
		char[] pw = new char[length];
		Random ran = new Random();
		int c = '0';
		int r1;
		for(int i = 0; i < length; i++)
		{
			r1 = (int) (Math.random() * 3);
			switch(r1)
			{
				case 0:
					c = digis.charAt(ran.nextInt(digis.length()));
					break;
				case 1:
					c = digis.charAt(ran.nextInt(digis.length()));
					break;
				case 2:
					c = digis.charAt(ran.nextInt(digis.length()));
					break;
			}
			pw[i] = (char) c;
		}
		return new String(pw);
	}

	public String sendMT(String keyWord, String sender, String recipient, String message) throws Exception
	{
		StringBuilder url = new StringBuilder();
		url.append("http://222.255.29.40/smsservice/Send.asmx/SendText?Username=ftl&Password=")
			.append(URLEncoder.encode("ftl123!@#"))
			.append("&Service=").append(URLEncoder.encode(keyWord))
			.append("&Keyword=").append(URLEncoder.encode(keyWord))
			.append("&ToNumber=").append(URLEncoder.encode(sender))
			.append("&FromNumber=").append(URLEncoder.encode(recipient))
			.append("&Message=").append(URLEncoder.encode(message));
		URLConnection uc = null;
		InputStream is = null;
		InputStreamReader isr = null;
		BufferedReader in = null;
		try
		{
			uc = new URL(url.toString()).openConnection();
			is = uc.getInputStream();
			isr = new InputStreamReader(is);
			in = new BufferedReader(isr);
			StringBuilder response = new StringBuilder();
			String inputLine;
			while((inputLine = in.readLine()) != null)
			{
				if (inputLine != null && !"".equals(inputLine))
					response.append(inputLine);
			}
			return response.toString();
		}
		finally
		{
			in.close();
			isr.close();
			is.close();
		}
	}

	public String receivedMO(
			String sender, String recipient, String content) throws Exception
	{
		if(recipient != null)
			recipient = recipient.replaceAll("^(84|04|08|0)?(.*)$","$2");
		if(content != null)
			content = content.replaceAll("( )+"," ");
		String contentLower = content.toLowerCase();
		if(contentLower.startsWith("nap") && !contentLower.startsWith("nap "))
			content = content.substring(0,3) + " " + content.substring(3);
		else
		{
			int spaceIndex = contentLower.indexOf(' ');
			if(spaceIndex > 0)
			{
				String providerCode = contentLower.substring(0,spaceIndex);
				if(ProviderManager.getInstance().getProvider(providerCode) != null)
				{
					String str = contentLower.substring(spaceIndex + 1);
					if(str.startsWith("nap") && !str.startsWith("nap "))
						content = content.substring(0,spaceIndex + 4) + " " + content.substring(spaceIndex + 4);
				}
			}
		}
		String[] params = StringUtil.toStringArray(content, " ");
		String providerCode;
		if(params.length > 0)
			providerCode = params[0];
		else
			providerCode = "NAP";
		String result;
		Connection cn = null;
		try
		{
			cn = GU.createConnection();
			if(providerCode.equalsIgnoreCase("NAP"))
			{
				String nickName;
				if(params.length < 2)
				{
					nickName = getNickNameByPhone(cn,sender);
					if(nickName == null)
						throw new Exception("So dien thoai " + sender + " chua duoc dang ky.");
				}
				else
					nickName = params[1];
				Player player = PlayerManager.getInstance().loadPlayerDetail(cn,nickName);
				if(player == null)
				{
					String phoneNickName = getNickNameByPhone(cn,sender);
					if(phoneNickName != null)
					{
						player = PlayerManager.getInstance().loadPlayerDetail(cn,phoneNickName);
						nickName = phoneNickName;
					}
				}
				if(player == null)
					throw new AppException("VB010",nickName);
				return recharge(cn,player,sender,recipient,"",GU.dic.getString("Recharge.NAP"));
			}
			if(params.length < 2)
			{
				com.ftl.game.Provider provider = ProviderManager.getInstance().getProvider(providerCode);
				if(provider == null)
					provider = ProviderManager.getInstance().getProvider("CASINOVIET");
				if(provider == null)
					throw new Exception("FTLCASINO-ERR-01");
				String downloadLink = provider.getSyntax("CLIENT_URL").getDescription();
				return "link tai gamevh.net - " + downloadLink;
			}

			String commandCode = params[1];
			if(commandCode.equalsIgnoreCase("NAP"))
			{
				String nickName;
				if(params.length < 3)
				{
					nickName = getNickNameByPhone(cn,sender);
					if(nickName == null)
						throw new Exception("So dien thoai " + sender + " chua duoc dang ky.");
				}
				else
					nickName = params[2];
				Player player = PlayerManager.getInstance().loadPlayerDetail(cn,nickName);
				if(player == null)
				{
					String phoneNickName = getNickNameByPhone(cn,sender);
					if(phoneNickName != null)
					{
						player = PlayerManager.getInstance().loadPlayerDetail(cn,phoneNickName);
						nickName = phoneNickName;
					}
				}
				if(player == null)
					throw new AppException("VB010",nickName);
				return recharge(cn,player,sender,recipient,providerCode,GU.dic.getString("Recharge.NAP"));
			}
			else if(commandCode.equalsIgnoreCase("REG") || (commandCode.equalsIgnoreCase("ACT")))
			{
				if(params.length < 4)
					throw new Exception("FTLCASINO-ERR-02");
				String nickName = params[2].toLowerCase();
				String password = params[3];
				if(password == null || password.equals(""))
					throw new Exception("VB005");
				if(nickName.length() > 30)
					throw new Exception("VB007");
				Player player = PlayerManager.getInstance().loadPlayerDetail(cn,nickName);
				if(player != null && player.getPhone().equalsIgnoreCase(sender))
					return recharge(cn,player,sender,recipient,providerCode,GU.dic.getString("Recharge.NAP"));
				if(player != null)
					throw new Exception("VB004");

				player = new Player();
				player.setNickName(nickName);
				player.setPhone(sender);
				player.setProvider(ProviderManager
						.getInstance().getProvider(providerCode));
				player.setPassword(MD5.hash(password));
				PlayerManager.getInstance().createPlayer(cn,player);
				player = PlayerManager.getInstance()
						.loadPlayerDetail(cn,nickName);
				playerRegistered(cn,player.getId(),sender,nickName.toLowerCase());
				String message = GU.dic.getString("Recharge.REG");
				return recharge(cn,player,sender,recipient,providerCode,
						StringUtil.replaceAll(message,"$password$",password));
			}
			else if(commandCode.equalsIgnoreCase("PW"))
			{
				if(params.length < 3)
					throw new Exception("FTLCASINO-ERR-04");
				String nickName = params[2];
				if(!PlayerManager.getInstance().isPlayerExists(cn, nickName))
				{
					String sql = "select nick_name from player where phone='" + StringEscapeUtil.escapeSql(sender) + "'";
					List<String> nicks = new LinkedList<String>();
					for(List<String> row : Database.executeQuery(cn,sql))
						nicks.add(row.get(0));
					if(nicks != null && !nicks.isEmpty())
						throw new AppException(
							"gamevh.net: Tai khoan " + nickName + " khong ton tai tren he thong.\n" +
							"Tai khoan co the lay lai mat khau la " + StringUtil.join(nicks) + ".");
					else
						throw new AppException("VB010",nickName);
				}
				else
				{
					String playerPhone = getPlayerPhone(cn,nickName);
					if(playerPhone != null)
						playerPhone = playerPhone.replaceAll("^(84|04|08|0)?(.*)$","$2");
					if(playerPhone == null || playerPhone.equals(""))
						throw new Exception("Tai khoan " + nickName + " chua dang ky so dien thoai.");
					else if(!sender.equals(playerPhone))
						throw new Exception("Ban can dung so " + playerPhone + " de nhan tin.");
				}
				String newpass = createRandomPassword(6);
				String password = MD5.hash(newpass);
				updatePassword(cn, nickName, password);
				System.out.println(new java.util.Date() + ": updated password of " + nickName + " to " + newpass + ", md5=" + password);
				result = GU.dic.getString("Recharge.PW");
				result = StringUtil.replaceAll(result, "$number$", recipient);
				result = StringUtil.replaceAll(result, "$keyword$", providerCode);
				result = StringUtil.replaceAll(result, "$pass$", newpass);
				result = StringUtil.replaceAll(result, "$userName$", nickName);
				return result;
			}
			else if(commandCode.equalsIgnoreCase("SETPW"))
			{
				if(params.length < 5)
					throw new Exception("FTLCASINO-ERR-05");
				String nickName = params[2];
				String oldpass = params[3];
				String newpass = params[4];
				if(!PlayerManager.getInstance().isPlayerExists(cn, nickName))
				{
					String sql = "select nick_name from player where phone='" + StringEscapeUtil.escapeSql(sender) + "'";
					List<String> nicks = new LinkedList<String>();
					for(List<String> row : Database.executeQuery(cn,sql))
						nicks.add(row.get(0));
					if(nicks != null && !nicks.isEmpty())
						throw new AppException(
							"gamevh.net: Tai khoan " + nickName + " khong ton tai tren he thong.\n" +
							"Tai khoan co the dat mat khau la " + StringUtil.join(nicks) + ".");
					else
						throw new AppException("VB010",nickName);
				}
				else
				{
					String playerPhone = getPlayerPhone(cn,nickName);
					if(playerPhone != null)
						playerPhone = playerPhone.replaceAll("^(84|04|08|0)?(.*)$","$2");
					if(playerPhone == null || playerPhone.equals(""))
						throw new Exception("Tai khoan " + nickName + " chua dang ky so dien thoai.");
					else if(!sender.equals(playerPhone))
						throw new Exception("Ban can dung so " + playerPhone + " de nhan tin.");
				}
				String md5OldPass = Database.getValue(
						cn,"select password from player where nick_name = '" + StringEscapeUtil.escapeSql(nickName) + "'");
				if(!md5OldPass.equals(MD5.hash(oldpass)))
					throw new Exception("FTLCASINO-ERR-06");
				String md5NewPassword = MD5.hash(newpass);
				updatePassword(cn, nickName, md5NewPassword);
				System.out.println(new java.util.Date() + ": updated password of " + nickName + " to " + newpass + ", md5=" + md5NewPassword);
				result = GU.dic.getString("Recharge.SETPW");
				result = StringUtil.replaceAll(result, "$number$", recipient);
				result = StringUtil.replaceAll(result, "$keyword$", providerCode);
				result = StringUtil.replaceAll(result, "$pass$", newpass);
				result = StringUtil.replaceAll(result, "$userName$", nickName);
				return result;
			}
			else
			{
				com.ftl.game.Provider provider = ProviderManager.getInstance().getProvider("CASINOVIET");
				String downloadLink = provider.getSyntax("CLIENT_URL").getDescription();
				return "link tai gamevh.net - " + downloadLink;
			}
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
	}
%>
<%
	List<String> allowedIps = new LinkedList<String>();
	allowedIps.add("222.255.29.40");
	allowedIps.add("127.0.0.1");
	String time = request.getParameter("DateTime");
	String timeStamp = request.getParameter("TimeStamp");
	String sender = request.getParameter("From");
	String recipient = request.getParameter("To");
	String message = request.getParameter("Message");
	String keyWord = request.getParameter("Keyword");
	try
	{
		String remoteAddress = request.getHeader("X-FORWARDED-FOR");  
		if(remoteAddress == null)  
			remoteAddress = request.getRemoteAddr();  
		if(remoteAddress == null || !allowedIps.contains(remoteAddress))
			throw new Exception("Your ip (" + remoteAddress + ") is not a trusted ip.");
		System.out.println(new java.util.Date() + ": process SMS '" + message + "' from " + sender + ", service number=" + recipient);
		String result = receivedMO(sender, recipient, message);
		if(remoteAddress.equals("127.0.0.1"))
			out.println("SUCCESS");
		else
		{
			String resResult = sendMT(keyWord, sender, recipient, result);
			out.println("resResult " + resResult);
		}
	}
	catch(Exception ex)
	{
		ex.printStackTrace();
		Map result = new HashMap();
		result.put("Error", ex.getMessage());
		if(recipient != null && sender != null && keyWord != null)
			sendMT(keyWord, sender, recipient, ex.getMessage() + " Lien he CSKH GameVH de duoc tro giup.");
		out.println(new com.google.gson.Gson().toJson(result));
	}
%>