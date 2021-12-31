<?php
require('connection.php');
$query = "SELECT * FROM contact";
$result = mysqli_query($con,$query);

$contacts = [];

if($result = mysqli_query($con,$query))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $contacts[$i]['id']    = (int)$row['id'];
    $contacts[$i]['nom'] = $row['nom'];
    $contacts[$i]['prenom'] = $row['prenom'];
    $contacts[$i]['tel'] = (int)$row['tel'];
    $contacts[$i]['status'] = $row['status'];
    $contacts[$i]['etat'] = $row['etat'];
    $i++;
  }
  echo json_encode($contacts);
}
else
echo mysqli_error($con);

?>