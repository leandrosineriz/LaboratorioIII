"use strict";
var Ejercicio1;
(function (Ejercicio1) {
    var xhtml = new XMLHttpRequest();
    function AdministrarTodos() {
        var div = document.getElementById("todos");
        xhtml.open("GET", "./backend/ejercicio1_todos.php", true);
        xhtml.send();
        xhtml.onreadystatechange = function () {
            if (xhtml.readyState == 4 && xhtml.status == 200) {
                div.innerHTML = xhtml.responseText;
            }
        };
    }
    Ejercicio1.AdministrarTodos = AdministrarTodos;
    function AdministrarNombre() {
        var div = document.getElementById("nombre");
        xhtml.open("GET", "./backend/ejercicio1_nombre.php", true);
        xhtml.send();
        xhtml.onreadystatechange = function () {
            if (xhtml.readyState == 4 && xhtml.status == 200) {
                div.innerHTML = xhtml.responseText;
            }
        };
    }
    Ejercicio1.AdministrarNombre = AdministrarNombre;
})(Ejercicio1 || (Ejercicio1 = {}));
//# sourceMappingURL=ejercicio1.js.map