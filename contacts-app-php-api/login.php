<?php
require 'connection.php';
// Get the posted data.
$data = file_get_contents("php://input");

if(isset($data) && !empty($data))
{

	$request = json_decode($data);
	$password = sha1($request->password);

	$query = "SELECT * FROM users WHERE email='$request->email' AND password='$password'";

	if($result = mysqli_query($con,$query))
	{
                                $row = $result->fetch_assoc();
		$user = [
		  'email' => $row['email'],
		  'token' => bin2hex(random_bytes(64))
		];
		echo json_encode($user);
	}else{
		echo mysqli_error($con);
	}

}