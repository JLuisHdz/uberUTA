<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($conexion, "SELECT * FROM tusuarios WHERE email='$params->email' AND password='$params->password'");
 
    class Result {}
    
    // GENERA LOS DATOS DE RESPUEScd desktopTA
    $response = new Result();
   
  
    if($resultado->num_rows > 0) {
        $response->resultado = 'OK';
        $response->mensaje = 'Sesion iniciada con exito!';

       
    } else {
        $response->resultado = 'FAIL';
        $response->mensaje = 'Login Fallido';
    }
    
    header('Content-Type: application/json');
    
    echo json_encode($response); // MUESTRA EL JSON GENERADO
    
?>