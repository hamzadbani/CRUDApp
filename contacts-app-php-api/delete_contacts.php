<?php

require 'connection.php';

$id = ($_GET['id'] !== null) ? $_GET['id'] : false;

if(!$id)
{
  return http_response_code(400);
}

// Delete contact
$query = "DELETE FROM contact WHERE id ='$id' LIMIT 1";

if(mysqli_query($con, $query))
{
  	$message = [
	  "deleted" => true
	];
	echo json_encode($message);
}