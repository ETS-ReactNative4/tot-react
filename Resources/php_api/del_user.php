<?php
	header("Access-Control-Allow-Origin: *");

	include('db.php');

	$id= $_POST['id'];
	
	
    //delete data
	$sql = "DELETE FROM user WHERE id='$id'";

	$result = mysqli_query($link, $sql);

	if ($result) {
        echo json_encode(array('status' => 'success','message' => 'ลบข้อมูลเรียบร้อยแล้ว'));
	} else {
        echo json_encode(array('status' => 'errors','message' => 'ผิดพลาด'));
	}