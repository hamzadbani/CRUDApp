<?php
require 'connection.php';
$data = file_get_contents("php://input");

if(isset($data) && !empty($data))
{
  $request = json_decode($data);

  $query = "UPDATE contact SET nom='$request->nom',prenom='$request->prenom',tel='$request->tel',status='$request->status',etat='$request->etat' WHERE id = '$request->id'";

  if(mysqli_query($con, $query))
  {
    $contact = [
      'nom' => $request->nom,
      'prenom' => $request->prenom,
      'tel' => $request->tel,
      'status' => $request->status,
      'etat' => $request->etat,
      'id'    => $request->id
    ];
    echo json_encode($contact);
  }
}