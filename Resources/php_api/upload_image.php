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
		$myfile = json_decode($content, true);
		$imageData = $myfile['imageData'];
		
		//decode base64 image data
		$data = str_replace('data:image/jpeg;base64,', '', $imageData);
		$data = str_replace(' ', '+', $data);
		$data = base64_decode($data);
		$filename =  uniqid().'.jpeg';
		file_put_contents('upload/'.$filename, $data);
		
		$filename_url = 'https://codingthailand.com/api/upload/'.$filename;
		//insert data
		$sql = "INSERT INTO `upload` (`filename`) VALUES ('$filename_url');";

		$result = mysqli_query($link, $sql);
		
		if ($result) {
		   echo json_encode(['status' => 'ok','message' => 'อัปโหลดไฟล์เรียบร้อย']);
		} else {
		   echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);	
		}
	
	}
	
	mysqli_close($link);