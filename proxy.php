<?php
	$jsonurl = "http://os.noterik.com/github_stats.json";
	$json = file_get_contents($jsonurl);
	echo $json;
?>