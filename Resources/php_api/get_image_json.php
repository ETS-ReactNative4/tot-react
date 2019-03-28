<?php
		header("Access-Control-Allow-Origin: *");
		
		$link = mysqli_connect('localhost', 'root', '', 'mydb');

		mysqli_set_charset($link, 'utf8');

              

        $sql = "SELECT * FROM upload";
        $result = mysqli_query($link, $sql); 
        $imgArray = array();            
		while ($row = mysqli_fetch_assoc($result)) {
			 $imgArray[] = $row;
		}

		echo json_encode($imgArray,JSON_UNESCAPED_SLASHES);
?>

