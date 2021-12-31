<?php
require('connection.php');

$term = ($_GET['term'] !== null) ? $_GET['term'] : false;

$query = "SELECT * FROM contact WHERE nom LIKE '%$term%'";

$contacts = [];

if($result = mysqli_query($con,$query))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $contacts[$i]['id']    = $row['id'];
    $contacts[$i]['nom'] = $row['nom'];
    $contacts[$i]['prenom'] = $row['prenom'];
    $contacts[$i]['tel'] = $row['tel'];
    $i++;
  }
  echo json_encode($contacts);
}else{
  echo mysqli_error($con);
}
?>