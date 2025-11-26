<%@ page
import="java.io.*"
import="java.util.*"
%>
<%
	response.setHeader("Access-Control-Allow-Origin","*");
	request.setAttribute(com.ftl.wak.ActionFilter.ATTRIBUTE_EXCLUDE_LAYOUT,Boolean.TRUE);
	com.ftl.util.FileUtil.appendFile("crash_report.log",request.getParameter("result"),"utf-8");
	com.ftl.util.FileUtil.appendFile("crash_report.log","\n","utf-8");
%>