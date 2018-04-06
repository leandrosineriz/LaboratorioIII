"use strict";
var nombre = "leandro";
var apellido = "siñeriz";
function miFuncion(nombre, apellido) {
    var auxNomUno = nombre.substr(0, 1);
    var auxNomDos = nombre.substr(1, nombre.length);
    auxNomDos = auxNomDos.toLowerCase();
    auxNomUno = auxNomUno.toUpperCase();
    auxNomUno = auxNomUno.concat(auxNomDos);
    apellido = apellido.toUpperCase();
    console.log(auxNomUno + "," + apellido);
}
miFuncion(nombre, apellido);
//# sourceMappingURL=05_ejercicio.js.map