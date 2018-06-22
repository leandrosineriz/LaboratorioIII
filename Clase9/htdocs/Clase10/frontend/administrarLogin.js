function IniciarSesion()
{
    if($("#inputUsuario").val()!="" && $("#inputPassword").val()!="")
    {
        var usuario= $("inputUsuario").val();
        var password=$("inputPassword").val();
        
        $.ajax({
            type: "POST",
            //type: "GET",
            url: "./backend/test/",
            data: "usuario="+usuario+"&&contraseña="+password,
            dataType: "text",
            async: true
        }
    )
    .done(function(resultado){
        localStorage.setItem("miToken",resultado.replace(/['"]+/g, ''));    
        //$("#lblToken").html(resultado.replace(/['"]+/g, ''));
        window.location.href = "http://localhost:8080/Clase10";
    })
    .fail(function(b1,b2,b3){
        
        console.log(b1+"\n"+b2+"\n"+b3+"\n");
    });
    
    }
}