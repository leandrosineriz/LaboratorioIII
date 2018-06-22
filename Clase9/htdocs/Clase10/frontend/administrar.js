
$(document).ready(function(){
MostrarCds();
});


function MostrarCds(){
    var token=localStorage.getItem("miToken");
    //var myHeaders = new Headers();
    myHeaders.append("token",token);
    $.ajax({
        //type: "POST",
        type: "GET",
        url: "./backend/",
        //data: "token="+token,
        headers: { 'token': token },
        dataType: "text",
        async: true
    }
    )
    .done(function(resultado){
        
        var res=resultado.trim();
        //resultado.replace("\n","");
        if(res!="usuarioInvalido")
        {
            $("#div_tabla_cd").html(resultado);
        }else{
            window.location.href = "http://localhost:8080/Clase10/login.html";
        }
        
    })
    .fail(function(b1,b2,b3){

        console.log(b1+"\n"+b2+"\n"+b3+"\n");
    });
}

function Modificar(){

}

function Eliminar(){

}
