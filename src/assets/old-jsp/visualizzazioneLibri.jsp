<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<style>

</style>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page
	import="com.primas.corsoBase2021.javaEE.DatabaseRelazionale.model.DAOMemoryDbBiblioteca"%>
<meta charset="UTF-8">
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
<title>Visualizzazione Libri</title>
</head>
<style><%@include file="/resources/CSS/visualizzazione.css"%></style>
<body>

 <div class="contenitore">
		<nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top"
			style="background-color: #26A645; height: 75px;">
			<div class="container">
				<a class="navbar-brand" href="menu"><img id="img_logo"
					class="img-thumbnail" width="120" height="" src="${pageContext.request.contextPath}/resources/IMG/logopavia.jpg"
					alt=""></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="nav navbar-nav navbar-right ">
						<li class="nav-item active"><a class="nav-link stileBottoni"
							href="menu"><b>Home</b> <span class="sr-only">(current)</span>
						</a></li>
						
						<li class="nav-item active"><a class="nav-link stileBottoni"
							href="./LogoutServlet"><b>Logout</b> <span class="sr-only">(current)</span>
						</a></li>

					</ul>

				</div>
				<h6><font color=#FFFFFF><b> Utente: ${getUtente.email} <br> 
					Operazioni eseguite: ${getUtente.numeroOperazioni}</b></font></h6>
			</div>
		</nav>
		<div class="homePage">
		
			<form action="menu" >
				<div class="login">
					<div class="contenitoreAvatar">
						<img src="${pageContext.request.contextPath}/resources/IMG/logopavia.jpg" alt="Avatar" class="avatar">
					</div><br>
					<table class="table-bordered" style="height: 160px; width: 100%;">
						<thead>
							<tr>
								<th scope="col" style="text-align: center;">Codice</th>
								<th scope="col" style="text-align: center;">Titolo</th>
								<th scope="col" style="text-align: center;">Autore</th>
								<th scope="col" style="text-align: center;">Numero Copie</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${listaLibri}" var="libro">
								<tr>
									<td style="text-align: center;"><c:out
											value="${libro.getCodice()}" />
									<td style="text-align: center;"><c:out
											value="${libro.getTitolo()}" /></td>
									<td style="text-align: center;"><c:out
											value="${libro.getAutore()}" /></td>
									<td style="text-align: center;"><c:out
											value="${libro.getNumeroCopie()}" /></td>
								</tr>
							</c:forEach>

						</tbody>
					</table>
					<br><br>
<button type="submit" class="btn buttonRegistrati w-100">HOME</button>
					
					
					
					
					
				</div>
			</form>
			<!--  <form action="LoginServlet" method="post">
		<div class="container">
			<p class="col-md-6 text-center">
				<a href="#" data-target="#login-modal" data-toggle="modal"
					role="button" class="btn-info btn-lg ">Login Here</a>

			</p>

		</div>

		<div class="modal fade" id="login-modal">
			<div class="modal-dialog">
				<div class=modal-content>
					<div class="modal-header">
						<img id="img_logo" class="img-thumbnail" width="200" height="200"
							src="logo.jpg" alt="">
					</div>
					<div id="div-forms">

						<div class="modal-body">
							<div>
								<span>Inserisci Email e Password:</span>
							</div>
							<input class="form-control" placeholder="Email" type="text"
								name="username" required> <input class="form-control"
								placeholder="Password" type="password" name="password" required>
							<div class="checkbox">
								<br> <label> <input type="checkbox">
									Remember me
								</label>
							</div>
						</div>
						<div class="modal-footer">
							<div class="row">
								<div class="col-sm-12">
									<button type="submit" class="btn btn-primary">Login</button>
								</div>


							</div>
						</div>

					</div>

					<div></div>
				</div>
			</div>


		</div>

	</form> -->
		 </div>
		<div class="footer">
			<div class="row">
				<div class="col-8">
					<p class= "scrittaFooter">Email: amministrazione@bibliotecaprimas.com <br> Tel: 098.76453672<br>
	©2022 - Istituto Centrale per il Catalogo Unico delle Biblioteche Italiane e per le Informazioni Bibliografiche </p>
				</div>
				<div class="col-4 immagineSocial">
					<img class="img-thumbnail" style="width: 140px" src="${pageContext.request.contextPath}/resources/IMG/social.png"
						alt="">
				</div>
			</div>
		</div>
	</div> 

	<form action="VisualizzazioneServlet" method="post">

		<div
			style="color:black; display: ${visualizzaTabella ? 'block' : 'none'}">
			<table class="table">
  <thead>
    <tr>
      <th scope="col">codice</th>
      <th scope="col">titolo</th>
      <th scope="col">autore</th>
      <th scope="col">numero copie</th>
    </tr>
  </thead>
  <tbody>
  <c:forEach items="${listaLibri}" var="libro">
    <tr>
     <td><c:out value="${libro.getCodice()}" />
					<td><c:out value="${libro.getTitolo()}" /></td>
					<td><c:out value="${libro.getAutore()}" /></td>
					<td><c:out value="${libro.getNumeroCopie()}" /></td>
    </tr>
    </c:forEach>
    
  </tbody>
</table>
		
		<!--  <table class="table">

			<tr>
				<th>Codice</th>
				<th>Titolo</th>
				<th>Autore</th>
				<th>Copie Disponibili</th>
			</tr>
			<c:forEach items="${listaLibri}" var="libro">
				<tr>
					<td><c:out value="${libro.getCodice()}" />
					<td><c:out value="${libro.getTitolo()}" /></td>
					<td><c:out value="${libro.getAutore()}" /></td>
					<td><c:out value="${libro.getNumeroCopie()}" /></td>
				</tr>
			</c:forEach>

		</table> -->
		</div>
		<br> <br> <input type="submit"
			value="clicca qui per visualizzare la lista dei libri"> <br>
		<br> <a href="menu"> Torna al Menu </a>
	</form>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
</html>