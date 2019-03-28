<?php

		include('db.php');

        $sql = "SELECT * FROM upload ORDER BY id DESC";
        $result = mysqli_query($link, $sql); 
		
		
		
?>
<!DOCTYPE html>
<html lang="en" xmlns:fb="http://ogp.me/ns/fb#">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>รายการอัปโหลดภาพ</title>

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
		<h1>รายการการอัปโหลดภาพ</h1>
		   <table border="1" style="width:50%">
		   <tr>
				<td>รหัส</td>
				<td>ไฟล์ภาพ</td> 

			  </tr>
		   <?php
				while ($row = mysqli_fetch_row($result)) {
		   ?>
			  <tr>
				<td><?php echo $row[0] ?></td>
				<td><a href="<?php echo $row[1] ?>"><?php echo $row[1] ?></a></td>
			  </tr>
			<?php } ?>
			</table>
				
  </body>
</html>
