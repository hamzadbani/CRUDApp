<?php
//The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin. For requests without credentials, the literal value " * " can be specified as a wildcard; the value tells browsers to allow requesting code from any origin to access the resource.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$con = mysqli_connect("localhost","root","","contacts");
?>