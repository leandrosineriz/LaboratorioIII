var nombre:string="leandro";
var apellido:string ="siñeriz";

function miFuncion(nombre:string,apellido:string):void
{
    var auxNomUno= nombre.substr(0,1);
    var auxNomDos=nombre.substr(1,nombre.length);
    auxNomDos=auxNomDos.toLowerCase();
    auxNomUno=auxNomUno.toUpperCase();

    auxNomUno= auxNomUno.concat(auxNomDos);

    apellido=apellido.toUpperCase();

    console.log(`${auxNomUno},${apellido}`);

}

miFuncion(nombre,apellido);