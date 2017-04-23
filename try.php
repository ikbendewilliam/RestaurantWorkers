<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Who works in that restaurant | DEMO</title>
		<link rel="stylesheet" href="./css/reset.css" />
		<link rel="stylesheet" href="./css/master.css" />
	</head>
	<body>
		<header>
			<!-- due to the work of js, no whitespace between burgerButton and nav!!! -->
			<a href="./index.php"><img src="./images/empty.png" class="logo" alt="wwitr?"></a>
			<a class="burgerButton" id="burgerButton">&#9776;</a><nav class="bgTransition collapsed">
				<a href="./index.php"><img src="./images/empty.png" class="logo" alt="wwitr?"></a>
				<ul>
					<li><a href="./index.php">home</a></li>
					<li><a href="./demo.php">Demo</a></li>
					<li><a href="./try.php">Try it out</a></li>
					<li><a href="./about.php">About</a></li>
				</ul>
			</nav>
		</header>
		<main>
			<article>
				<h1>Try it out</h1>
			</article>
			<article class="searchbar">
				<input type="text" placeholder="Location" id="search" />
				<a href="#" id="searchbutton">&#128269;</a>
			</article>
			<article id="restaurantList"></article>
		</main>
		<footer>
			<p>Made by William</p>
		</footer>

		<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>-->
		<script src="./js/button.js"></script>
		<script src="./js/request.js"></script>
		<script src="./js/turingr.js"></script>
		<script src="./js/googlePlaces.js"></script>
		<script src="./js/apiLoader.js"></script>
	</body>
</html>
