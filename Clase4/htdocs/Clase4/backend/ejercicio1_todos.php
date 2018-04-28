<?php

$pathUsuarios="../archivos/usuarios_ejercicio1.txt";

$arch=fopen($pathUsuarios,"r");
$text="";
while(!feof($arch))
{
    $text.=fgets($arch)."<br>";
}


fclose($arch);

echo $text;
?>