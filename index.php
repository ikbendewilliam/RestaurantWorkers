<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Who works in that restaurant?</title>
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
				<h1>Home</h1>
				<h2>Welcome</h2>
				<p>This is a simple website that gives you the option of searching for a restaurant in Belgium. You will get a list of employees ordered by restaurant they work in.</p>
				<p>Word of warning: not all API's work perfectly and results may vary.</p>
				<h2>Demo</h2>
				<p>Since there can go a lot wrong, I added a demo page where you can watch an example. This is made with local sample data and does not represent any real-life results. It is simply showing what to expect.</p>
				<h2>Try it out</h2>
				<p>The "try it out" page is where things actually happen. You can give any location in Belgium and it will return a list of restaurants. Please note that I'm using multiple API's and so it may take a few seconds for every restaurant to load.</p>
				<h2>About</h2>
				<p>More information can be found on the <a href="./about.php">about</a> page.</p>
			</article>
		</main>
		<footer>
			<p>Made by William</p>
		</footer>

		<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>-->
		<script src="./js/button.js"></script>
	</body>
</html>
