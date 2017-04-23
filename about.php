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
				<h1>About</h1>
				<h2>The project</h2>

				<p>The goal of this project is to combine two API's. I started off very optimistic and wanted to use three instead of two. My original idea was to retrieve news. Get the names out of the article and change these names to random names. Retrieving news is actually very easy and was done fairly soon. However the second and middle API wasn't as easy. Turns out name recognition API's aren't widespread and the ones I found were back-end only. When you tried to use JavaScript, it returned a "Cross-Origin Request Blocked"-error a.k.a. cors. This was my first time that I saw this error. I could easily resolve this by using node.js instead, but since this is a project for school and node.js isn't in the curriculum I tried other ways. After trying for around two weeks I gave up. Turns out you weren't even able to see the results by surfing to the endpoint, all I got was a <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection" target="_blank">301</a>, <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_Error" target="_blank">403 or a 404</a>. So even scraping with php wasn't going to work. I started over with a new idea and two new API's, from there on everything went very smoothly and you can see the result at the <a href="./demo.php">demo</a> or <a href="./try.php">try it out</a> page.</p>

				<h2>Google places</h2>
				<p>I use the <a href="https://developers.google.com/places/web-service/" target="_blank">Google places</a>-API to search for restaurants in an area of your choice. Since this API is only back-end allowed (<a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">cors</a> is disabled), I use php to scrape the API. This can be done in this case since Google shows your results on the requested page. Not everyone does this as I already mentioned.</p>

				<h2>Turingr</h2>
				<p><a href="https://turingr.com" target="_blank">Turingr</a> is a new API on the web, it gives you a list of people that work in a given company, but it is not bulletproof yet and results may vary. It is an API made by someone that's also behind <a href="https://taglayer.com" target="_blank">Taglayer</a>.</p>

				<h2>Made by William</h2>
				<p>I'm a student at <a href="http://www.howest.be/" target="_blank">Howest</a> in Belgium. Currently I'm in my second year of <a href="http://www.nmct.be/opleiding/" target="_blank">Nmct</a> and I'm hoping to graduate in July 2018. You can contact me via my <a href="mailto:ikbendewilliam@hotmail.com">personal mail</a> or via my <a href="mailto:william.verhaeghe@student.howest.be">school mail</a>.</p>
			</article>
		</main>
		<footer>
			<p>Made by William</p>
		</footer>

		<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>-->
		<script src="./js/button.js"></script>
	</body>
</html>
