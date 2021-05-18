<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html lang="en">
<head>
<title>Login Page</title>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3
.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
	<div>
		<div id="loginbox" style=""
			class="mainbox col-md-3 col-md-offset-2 col-sm-6 col-sm-offset-2">
			<div class="panel panel-info">
				<div class="panel-heading">
					<div class="panel-title">Sign In</div>
				</div>
				<div style="" class="panel-body">
				<form:form action="${pageContext.request.contextPath}/autenticazione" method="POST" class="form-horizontal">
<!--
Place for messages: error, alert etc ...
-->
<div class="form-group">
<div class="col-xs-15">
<div>


<!--
Togliere il commento che segue quando si gestira' il logout

-->


</div>
</div>
</div>
<div style="margin-bottom:25px" class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input type="text"name="username"placeholder="username"class="form-control">
</div>
<div style="margin-bottom:25px" class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
<input type="password"name="password"placeholder="password"class="form-control"></div>
<div style="margin-top:10px" class="form-group">
<div class="col-sm-6 controls">
<button type="submit"class="btn btn-success">Login</button>
</div>
</div>
</form:form>
</div>
</div>
</div>
</div>
</body>
</html>