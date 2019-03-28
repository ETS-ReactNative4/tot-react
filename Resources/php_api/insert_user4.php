<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
	
	$link = mysqli_connect('localhost', 'root', '', 'mydb');

	mysqli_set_charset($link, 'utf8');
	
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		
	
		// get post body content
		$content = file_get_contents('php://input');
		// parse JSON
		$user = json_decode($content, true);
		
		$fullname = $user['fullname'];
		$email = $user['email'];
		$password = $user['password'];
		$dob = $user['dob'];
		
		//check duplicate $email
		$sql2 = "SELECT email FROM user4 WHERE email='$email' ";
		$result2 = mysqli_query($link, $sql2);
		$rowcount = mysqli_num_rows($result2);
		if ($rowcount == 1) {
			echo json_encode(['status' => 'error','message' => 'ไม่สามารถลงทะเบียนได้ อีเมลนี้มีผู้ใช้แล้ว']);
			exit;
		}
		
		//insert data
		$sql = "INSERT INTO `user4` (`fullname`, `email`, `pwd`,`dob`) VALUES ('$fullname', '$email', '$password','$dob');";

		$result = mysqli_query($link, $sql);
		
		if ($result) {
		   echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อย']);
		} else {
		   echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);	
		}
	
	}
	
	mysqli_close($link);
	