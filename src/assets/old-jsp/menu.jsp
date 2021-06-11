<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
<title>Menu</title>
<style><%@include file="/resources/CSS/menu.css"%></style>
<!--  <style>
body{
background: #5f2c82; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #5f2c82, #49a09d); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #5f2c82, #49a09d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style> -->
</head>
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
			

				<h6>
					<font color=#FFFFFF><b>Utente: ${getUtente.email} <br> 
					Operazioni eseguite: ${getUtente.numeroOperazioni}</b></font>
				</h6>

			</div>
		</nav>
		<div class="homePage">

			<div class="container" style="position: relative;">
				<div class="row">
					<div class="col-md-4">
						<div class="cards" style="top: 115px;">
							<img class="card-img-top" src="${pageContext.request.contextPath}/resources/IMG/slide.jpg" alt="Card image cap"
								style="height: 250px;">
							<div class="card-block">
								<h4 class="card-title"
									style="text-align: center; color: #26A645">
									<b>Inserisci copia libro</b>
								</h4>

								<p class="card-text" style="text-align: center;">Inserisci
									una copia all'interno della Biblioteca per renderla disponibile
									a tutta la Comunity</p>
								<a href="inserimentoLibri"
									class="btn btn-success w-100 mb-3"> Inserisci</a>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="cards" style="top: 115px;">
							<img class="card-img-top" src="${pageContext.request.contextPath}/resources/IMG/rimozioneLibri.jpg"
								alt="Card image cap" style="height: 250px;">
							<div class="card-block">
								<h4 class="card-title"
									style="text-align: center; color: #26A645">
									<b>Rimuovi copia libro</b>
								</h4>
								<p class="card-text" style="text-align: center;">Rimuovi una
									copia dalla Biblioteca. Questa non sarà più disponibile agli
									altri utenti</p>
								<a href="rimozioneLibro"
									class="btn btn-success w-100 mb-3"> Rimuovi</a>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="cards" style="top: 115px;">
							<img class="card-img-top" src="${pageContext.request.contextPath}/resources/IMG/listaLibri.jpg"
								alt="Card image cap" style="height: 250px;">
							<div class="card-block">
								<h4 class="card-title"
									style="text-align: center; color: #26A645">
									<b>Visualizza lista libri</b>
								</h4>
								<p class="card-text" style="text-align: center;">Visualizza
									la lista dei libri disponibili nella Biblioteca e scegli quello
									che fa per te!</p>
								<a href="VisualizzazioneServlet"
									class="btn btn-success w-100 mb-3"> Visualizza</a>
							</div>
						</div>
					</div>
				</div>
			</div>








			<!--  <div class="container pt-5">
		<div class="row">
			<div class="col-sm-6">
				<p class="lead">
				<h2> <font color = "blue">MENU BIBLIOTECA</font></h2> <br>
				<li><a href="visualizzazioneLibri.jsp">Visualizza Libri</a></li>
				<br>

				<li><a href="inserimentoLibri.jsp">Inserimento Libro</a></li>
				<br>
				<li><a href="rimozioneLibro.jsp">Rimuovi Libro</a></li> <br>
				<li><a href="prenotazioneLibro.jsp">Prenota libro</a></li> <br>
				<li><a href="restituzioneLibro.jsp">Restituisci libro</a></li>
				</p>

			</div>
			<div class="col-sm-6">
				<figure class="figure">
					<img src="libri.jpeg" class="figure-img img-fluid" alt="sfondo">
					<figcaption class="figure-caption"></figcaption>
				</figure>
			</div>
		</div>
	</div>
-->
			<!--  <div class="container">

<img class= "img-fluid float-center" src= "libri.jpeg" alt="sfondo">

</div> 

	 <h1 style="text-align: center;">MENU BIBLIOTECA</h1> <br><br>

	<li> <a href="visualizzazioneLibri.jsp">Visualizza Libri</a></li><br>
	<li> <a href="inserimentoLibri.jsp">Inserimento Libro</a> </li><br>
	<li> <a href="rimozioneLibro.jsp">Rimuovi Libro</a></li> <br>
	<li> <a href="prenotazioneLibro.jsp">Prenota libro</a></li> <br>
	<li> <a href="restituzioneLibro.jsp">Restituisci libro</a></li>-->

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


</body>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>

</html>