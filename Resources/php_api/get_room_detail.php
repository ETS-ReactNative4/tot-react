<?php
		header("Access-Control-Allow-Origin: *");
		
		$link = mysqli_connect('localhost', 'api', '', '');

		mysqli_set_charset($link, 'utf8');

        
		$id = $_GET['room_id'];

        $sql = "SELECT * FROM room_detail WHERE room_id='$id' limit 1";
        $result = mysqli_query($link, $sql); 
        $room = null;           
		while ($row = mysqli_fetch_assoc($result)) {
			 $room = $row;
		}

		echo json_encode($room);
?>

