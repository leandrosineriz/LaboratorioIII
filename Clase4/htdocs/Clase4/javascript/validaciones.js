"use strict";
var Test;
(function (Test) {
    var xhttp = new XMLHttpRequest();
    function ValidarUsuario() {
        var usuario = document.getElementById("txtUsu").value;
        var contraseña = document.getElementById("txtPass").value;
        xhttp.open("GET", "backend/validar.php?usu=" + usuario + "&&pass=" + contraseña, true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            console.log(xhttp.readyState);
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var $respuesta = xhttp.responseText;
                document.bgColor = $respuesta;
                alert(xhttp.responseText);
            }
        };
    }
    Test.ValidarUsuario = ValidarUsuario;
})(Test || (Test = {}));
//# sourceMappingURL=validaciones.js.map