namespace Test{

    let xhttp:XMLHttpRequest=new XMLHttpRequest();

    export function ValidarUsuario()
    {
        var usuario:string=(<HTMLInputElement>document.getElementById("txtUsu")).value;
        var contraseña=(<HTMLInputElement>document.getElementById("txtPass")).value;

        xhttp.open("GET","backend/validar.php?usu="+usuario+"&&pass="+contraseña,true);

        xhttp.send();

        xhttp.onreadystatechange = () => {
            
            console.log(xhttp.readyState);
            
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var $respuesta:string=xhttp.responseText;
                
                document.bgColor = $respuesta;
                alert(xhttp.responseText);

            }
           

        };



    }
}