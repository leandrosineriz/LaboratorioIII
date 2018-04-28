<?php

if(isset($_GET["usu"]) && isset($_GET["pass"]))
{   
    $pass=$_GET["pass"];
    $usu=$_GET["usu"];
    $usuarioEncontrado_ok=false;

    $pathUsuarios="../archivos/usuarios.txt";
    $arch=fopen($pathUsuarios,"r");
    
    $text=fread($arch,filesize($pathUsuarios));

    fclose($arch);

    $text=explode("\n",$text);

    foreach($text as $value)
    {
        if($value!="")
        {
            $usuario=explode("-",$value);

            if($usuario[0]==$usu && trim($usuario[1])==$pass)
            {
                $usuarioEncontrado_ok=true;
                break;
            }
        }
        
    }
      

    if($usuarioEncontrado_ok)
    {
        echo "green";
    }  
    else
    {
        echo "red";
    }
    
}
else
{
    echo "black";
}

?>
