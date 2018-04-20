/// <reference path="./clases1/rectangulo.ts"/>

var p1:Figuras.Punto=new Figuras.Punto(1,2);
var p2:Figuras.Punto=new Figuras.Punto(3,4);


var r1:Figuras.Rectangulo= new Figuras.Rectangulo(p1,p2);

console.log(r1.ToString());


