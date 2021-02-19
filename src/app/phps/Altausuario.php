<?php 
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 header("Allow: GET, POST, OPTIONS, PUT, DELETE");
 $method = $_SERVER['REQUEST_METHOD'];
 if($method == "OPTIONS") {
     die();
 }
 
 $json = file_get_contents('php://input');
 
 $params = json_decode($json);
 
 require("conexion.php");
 $con=conexion();
 
  mysqli_query($con,"insert into tusuarios(email, password, tipo) 
  values ('$params->email','$params->password','$params->tipo')");    
   
   class Result {}
 
   $response = new Result();
   $response->resultado = 'OK';
   $response->mensaje = 'datos grabados';
   header('Content-Type: application/json');
   echo json_encode($response); 

 
?>