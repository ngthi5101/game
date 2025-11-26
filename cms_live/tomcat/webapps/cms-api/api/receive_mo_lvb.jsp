<%@page contentType="text/html; charset=UTF-8"%><%@page import="java.util.*"%><%!
	public String receivedMO(String phone, String amount, String nickName) throws Exception
	{
		return "";
	}
%><%
	List<String> allowedIps = new LinkedList<String>();
	allowedIps.add("127.0.0.1");
	allowedIps.add("113.185.19.187");
    allowedIps.add("27.72.56.28");
	try
	{
		String remoteAddress = request.getHeader("X-FORWARDED-FOR");  
		if(remoteAddress == null)  
			remoteAddress = request.getRemoteAddr();  
		if(remoteAddress == null || !allowedIps.contains(remoteAddress))
			throw new Exception("Your ip (" + remoteAddress + ") is not a trusted ip.");
		String received = org.apache.commons.io.IOUtils.toString(request.getReader());
		System.out.println("LVBSMSTEST: " +received);
//		Dictionary parser = new Dictionary();
//		parser.loadFromXML(new ByteArrayInputStream(received.getBytes(StandardCharsets.UTF_8)));
//		out.println("<clientrply><error>0</error><error_desc>" +
//				StringEscapeUtil.escapeSql(receivedMO(action.getConnection(),parser.getString("msisdn"),parser.getString("totalamount"),parser.getString("account")) +
//				"</error_desc></clientrply>"));
	}
	catch(Exception ex)
	{
		ex.printStackTrace();
		out.println("<clientrply><error>2</error><error_desc>"+ ex.getMessage() +"</error_desc></clientrply>");
	}
%>