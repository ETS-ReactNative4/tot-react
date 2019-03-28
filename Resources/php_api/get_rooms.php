<?php
		header("Access-Control-Allow-Origin: *");
		
		$link = mysqli_connect('localhost', 'api', '', '');

		mysqli_set_charset($link, 'utf8');

              

        $sql = "SELECT * FROM rooms";
        $result = mysqli_query($link, $sql); 
        $roomArray = array();            
		while ($row = mysqli_fetch_assoc($result)) {
			 $roomArray[] = $row;
		}

		echo json_encode($roomArray);
?>

