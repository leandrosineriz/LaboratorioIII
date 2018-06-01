<?php

$persona= new stdClass();

if(isset($_POST["nombre"]))
{
$persona->nombre=$_POST["nombre"];
$persona->edad="22 post";

echo json_encode($persona);
}
else if(isset($_GET["miPersona"]))
{
    sleep(3);
    $persona=json_decode(json_encode($_GET["miPersona"]));
    echo $persona->nombre." - ".$persona->edad." POR GET";
    //echo $persona;
    //echo $_GET["miPersona"]["nombre"]." - ".$_GET["miPersona"]["edad"]." POR GET";
}
