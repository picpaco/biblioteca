<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/CSS/styleServizi.css">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Insert title here</title>
</head>
<body>
	<div class="contenitore">
		<nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top"
			style="background-color: #26A645; height: 75px;">
			<div class="container">
				<a class="navbar-brand" href="index"><img id="img_logo"
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
							href="index"><b>Home</b> <span class="sr-only">(current)</span>
						</a></li>
						<li class="nav-item active"><a class="nav-link stileBottoni"
							href="servizi"><b>Servizi</b><span class="sr-only">(current)</span></a></li>

					</ul>

				</div>
			</div>
		</nav>

		<div id="carouselExampleIndicators" class="carousel slide"
			data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0"
					class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>


			<div class="carousel-inner" role="listbox">
				<div class="carousel-item active"
					style="background-image: url(${pageContext.request.contextPath}/resources/IMG/slide.jpg); background-size: cover;">

					<div class="carousel-caption">
						<div class=col-6>



							<h1 class="titolo" style="text-align: text-center;">
								<b>Inserimento di copie nella Biblioteca</b>
							</h1>

						</div>


					</div>
				</div>
				<div class="carousel-item "
					style="background-image: url(${pageContext.request.contextPath}/resources/IMG/rimozioneLibri.jpg); background-size: cover;">
					<div class="carousel-caption">
						<div class=col-6>



							<h2 class="titolo">
								<b>Rimozione di copie dalla Biblioteca</b>
							</h2>

						</div>
					</div>
				</div>
				<div class="carousel-item "
					style="background-image: url(${pageContext.request.contextPath}/resources/IMG/listaLibri.jpg);">

					<div class="carousel-caption">
						<div class=col-6>



							<h2 class="titolo">
								<b>Visualizzazione lista libri</b>
							</h2>

						</div>
					</div>
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators"
				role="button" data-slide="prev"> <span
				class="carousel-control-prev-icon" aria-hidden="true"></span> <span
				class="sr-only">Previous</span>
			</a> <a class="carousel-control-next" href="#carouselExampleIndicators"
				role="button" data-slide="next"> <span
				class="carousel-control-next-icon" aria-hidden="true"></span> <span
				class="sr-only">Next</span>
			</a>
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