<?php
if (!empty($_GET["q"]))
{
	$q = $_GET["q"];
	$content = file_get_contents("https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCTwq7buJuAyg4TT6xnWXkyaNCntjXwUts&query=restaurant+in+$q");
	echo $content;
}
?>
