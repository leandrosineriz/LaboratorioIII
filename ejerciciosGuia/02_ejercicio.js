"use strict";
var lista = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (var x = 0; x < 12; x++) {
    console.log(lista[x] + " ");
    console.log(x + 1);
}
var contador = 0;
lista.forEach(function (value) {
    contador++;
    console.log(value + " " + contador);
});
//# sourceMappingURL=02_ejercicio.js.map