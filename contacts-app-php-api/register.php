<?php
require 'connection.php';
// Get the posted data.
$data = file_get_contents("php://input");

if(isset($data) && !empty($data))
{

	$request = json_decode($data);
	$password = sha1($request->password);

	$query = "INSERT INTO users (email,password) VALUES ('$request->email','$password')";

	if(mysqli_query($con,$query))
	{
		$user = [
		  'email' => $request->email,
		  'id'    => mysqli_insert_id($con),
		  'token' => bin2hex(random_bytes(64))
		];
		echo json_encode($user);
	}else{
		echo mysqli_error($con);
	}

}