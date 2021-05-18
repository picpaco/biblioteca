<%@ taglib prefix="security"
	uri="http://www.springframework.org/security/tags" %>

<p> User:  
<security:authentication property="principal.username" />
<br> Role(s):  
<security:authentication property="principal.authorities" /></p>