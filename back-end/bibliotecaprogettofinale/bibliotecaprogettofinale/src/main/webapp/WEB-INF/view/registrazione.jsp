<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib prefix="form"
uri="http://www.springframework.org/tags/form"
%>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Registrazione</title>
<style>.error {color:red}</style>
<link type="text/css"
		  rel ="stylesheet" href = "${pageContext.request.contextPath}/resources/CSS/registrazioneStyle.css">

</head>
<body>
	<div class="contenitore">
		<nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top"
			style="background-color: #26A645; height: 75px;">
			<div class="container">
				<a class="navbar-brand" href="index.jsp"><img id="img_logo"
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
							href="index.jsp"><b>Home</b> <span class="sr-only">(current)</span>
						</a></li>
						<li class="nav-item active"><a class="nav-link stileBottoni"
							href="servizi.jsp"><b>Servizi</b><span class="sr-only">(current)</span></a>
						</li>

					</ul>

				</div>
			</div>
		</nav>
		<div class="homePage">



			<form:form action="${pageContext.request.contextPath}/register" method="post">
				
						<input type = "text" name="nome" class="form-control" placeholder="nome"/>
							

					
					
						<input type = "text" name="cognome" class="form-control" placeholder="Cognome"/>
						
					
						<input type = "text" name="email" class="form-control" placeholder="email"/>
							
					
						<input type = "text" name="password" class="form-control" placeholder="password"/>
							



					<button type="submit" class="btn buttonRegistrati w-100">Registrati</button>

				


			</form:form>

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
					<p class="scrittaFooter">
						Email: amministrazione@bibliotecaprimas.com <br> Tel:
						098.76453672<br> ©2022 - Istituto Centrale per il Catalogo
						Unico delle Biblioteche Italiane e per le Informazioni
						Bibliografiche
					</p>
				</div>
				<div class="col-4 immagineSocial">
					<img class="img-thumbnail" style="width: 140px" src="${pageContext.request.contextPath}/resources/IMG/social.png"
						alt="">
				</div>




			</div>



		</div>
	</div>

	<!--  

	<form action="LoginServlet" method="post">
		<div class="container">
			<div class="row">
				<div class=" text-left col-md-6 font-weight-bold font-italic">
					<h1 class="display-4 text-center text-info">Benvenuto nella
						biblioteca online</h1>
				</div>
			</div>
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

	</form>
	<form action="RegistrazioneServlet" method="post">
		<div class="container">
			<p class="col-md-6 text-center">
				<a href="#" data-target="#login-model" data-toggle="modal"
					role="button" class="btn btn-info btn-lg ">Sign Up</a>

			</p>
		</div>
		<div class="modal fade" id="login-model">
			<div class="modal-dialog">
				<div class=modal-content>
					<div class="modal-header">
						<img id="img_logo" class="img-thumbnail" width="200" height="200"
							src="logo.jpg" alt="">
					</div>
					<div id="div-forms">

						<div class="modal-body">
							<div>
								<span>Inserisci i tuoi dati:</span>
							</div>
							<input class="form-control" placeholder="Nome" type="text"
								name="nome" required> <input class="form-control"
								placeholder="Cognome" type="text" name="cognome" required>
							<input class="form-control" placeholder="Email" type="text"
								name="email" required> <input class="form-control"
								placeholder="* Password" type="password" name="password"
								required> * La password deve soddisfare i seguenti
							requisiti:
							<ul>
								<li>Lunghezza 8 caratteri;</li>
								<li>Contenere almeno una lettera maiuscola;</li>
								<li>Contenere almeno una lettera minuscola;</li>
								<li>Contenere almeno un numero;</li>
								<li>Contenere almeno un carattere speciale (#@!%);</li>

							</ul>
						</div>
						<div class="modal-footer">
							<div class="row">
								<div class="col-sm-12">
									<button type="submit" class="btn btn-primary">Registrati</button>
								</div>


							</div>
						</div>

					</div>

					<div></div>
				</div>
			</div>


		</div>
	</form>
	<div class="container">
		<div class="text-center col-md-6 font-weight-bold font-italic">
			<h2 style="color:red; display: ${loginFailed ? 'block' : 'none'}">
				Credenziali Errate</h2>
		</div>
		<div class="text-center col-md-6 font-weight-bold font-italic">
			<h2
				style="color:red; display: ${utenteNonRegistrato ? 'block' : 'none'}">
				Utente non registrato</h2>
		</div>
		<div class="text-center col-md-6 font-weight-bold font-italic">
			<h2
				style="color:white; display: ${registrazioneEseguita ? 'block' : 'none'}">
				Registrazione avvenuta con successo</h2>
		</div>

		<div class="text-center col-md-6 font-weight-bold font-italic">
			<h2 style="color:red; display: ${datiErrati ? 'block' : 'none'}">
				Dati Errati riprovare</h2>
		</div>
	</div> -->







</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
</html>