<?php 
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 header("Allow: GET, POST, OPTIONS, PUT, DELETE");
 $method = $_SERVER['REQUEST_METHOD'];
 if($method == "OPTIONS") {
     die();
 }
 
  function conexion() {
  $con=mysqli_connect("localhost","root","","bdaventon5d");
//echo "conexion exitosa";
  return $con;
}
  $con=conexion();
  $registros=mysqli_query($con,"select email, password, tipo from tusuarios");
    
  while ($reg=mysqli_fetch_array($registros))  
  {
    $vec[]=$reg;
  }
  
  $cad=json_encode($vec);

  header('Content-Type: application/json');
echo $cad;
  ?>