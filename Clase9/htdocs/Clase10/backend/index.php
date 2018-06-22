<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Firebase\JWT\JWT as JWT;

require_once './vendor/autoload.php';
require_once "./clases/Verificadora.php";
require_once "./clases/Cd.php";
//require_once "vendor/firebase/jwt/jwt";

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;



//*********************************************************************************************//
//INICIALIZO EL APIREST
//*********************************************************************************************//
$app = new \Slim\App(["settings" => $config]);
//echo "antes funcion";


$app->get('/', function (Request $request, Response $response) {  
    $response->getBody()->write(CD::TraerCds());
    return $response;
    
})->add(function ($request,$response,$ndr){

    $response=VerificarUsuario($request,$response,$ndr);
    
    return $response;   
});

//Funcion para verificar que el token sea valido

function VerificarUsuario($request,$response,$ndr){

    $datos=$request->getHeader("token");
    try{
        $token=JWT::decode($datos[0],"clave-fuerte",["HS256"]);

        $response = $ndr($request,$response);
    }catch(Exception $e)
    {
        $response->getBody()->write("usuarioInvalido");
    }
    
    return $response; 
}

$app->post('/', function (Request $request, Response $response) {   
    $response->getBody()->write("Estoy en POST<br>");
    return $response;
    
})->add(function ($request,$response,$ndr){
    
    $cd=json_decode(json_encode($request->getParsedBody()));
    
    if(CD::AgregarCds($cd->titulo,$cd->interprete,$cd->anio))
    {
        $response->getBody()->write("CD Agregado<br>");
        
    }
    else
    {
        $response->getBody()->write("ERROR AL AGREGAR CD<br>");
        
    }
    
    $response = $ndr($request,$response);
    
    return $response;
})->add(function ($request,$response,$ndr){

    $datos=json_decode(json_encode($request->getParsedBody()));;
        
    try{
        $token=JWT::decode($datos->token,"clave-fuerte",["HS256"]);

        $response = $ndr($request,$response);
    }catch(Exception $e)
    {
        $response->getBody()->write("USUARIO INVALIDO<br>");
    }
    
    return $response;
    
});

$app->put('/', function (Request $request, Response $response) {   
    $response->getBody()->write("Estoy en PUT<br>");
    return $response;
    
})->add(function ($request,$response,$ndr){
    
    $cd=json_decode(json_encode($request->getParsedBody()));
    
    if(Verificadora::AgregarCds($cd->titulo,$cd->interprete,$cd->anio))
    {
        $response->getBody()->write("CD Modificado<br>");
        
    }
    else
    {
        $response->getBody()->write("ERROR AL MODIFICAR CD<br>");
        
    }
    
    $response = $ndr($request,$response);
    
    return $response;
});
/*
$app->delete('/', function (Request $request, Response $response) {   
    $response->getBody()->write("Estoy en DELETE<br>");
    return $response;
    
})->add(function ($request,$response,$ndr){
    
    $cd=json_decode(json_encode($request->getParsedBody()));
    
    
    if(Verificadora::EliminarCd($cd->id))
    {
        $response->getBody()->write("CD Eliminado<br>");
        
    }
    else
    {
        $response->getBody()->write("ERROR AL ELIMINAR CD<br>");
        
    }
    
    $response = $ndr($request,$response);
    
    return $response;
})->add(\Verificadora::class."::ValidarSA");
*/
$app->group('/test', function(){

    $this->post('[/]', function (Request $request, Response $response) {   
        
        $login=json_decode(json_encode($request->getParsedBody()));

        $usuario=$login->usuario;
        $contraseña=$login->contraseña;
    
        $ahora=time();
        $datos=new stdClass();
        $datos->usuario=$usuario;
        $datos->contraseña=$contraseña;
        $datos->iat=$ahora;
        $datos->exp=$ahora+(30);

        $token=JWT::encode($datos,"clave-fuerte");

        return $response->withJson($token,200);
              
    });

    $this->get('/{token}', function (Request $request, Response $response,$args) {  

        $datos=$args["token"];

        var_dump($datos);
        
        $token=JWT::decode($datos,"clave-fuerte",["HS256"]);

        var_dump($token);

    }); 
     

    
});   


$app->run();


?>
