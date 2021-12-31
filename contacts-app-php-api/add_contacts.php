<?php
require 'connection.php';
$data = file_get_contents("php://input");
if(isset($data) && !empty($data))
{

	$request = json_decode($data);

	$query = "INSERT INTO contact (nom,prenom,tel,status,etat) VALUES ('$request->nom','$request->prenom','$request->tel','$request->status','$request->etat')";

	if(mysqli_query($con,$query))
	{
		$contact = [
		  'nom' => $request->nom,
		  'prenom' => $request->prenom,
		  'tel' => $request->tel,
                                  'status' => $request->status,
                                  'etat' => $request->etat,
		  'id'    => mysqli_insert_id($con)
		];
		echo json_encode($contact);
	}else{
		echo mysqli_error($con);
	}

}