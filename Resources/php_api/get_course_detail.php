<?php
		header("Access-Control-Allow-Origin: *");
		
		$link = mysqli_connect('localhost', 'root', '', 'mydb');

		mysqli_set_charset($link, 'utf8');

        
		$id = $_GET['course_id'];

        $sql = "SELECT * FROM chapters WHERE course_id='$id' ";
        $result = mysqli_query($link, $sql); 
        $productArray = array();            
		while ($row = mysqli_fetch_assoc($result)) {
			 $productArray[] = $row;
		}

		echo json_encode($productArray);
?>

