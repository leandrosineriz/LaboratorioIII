/// <reference path="./Auto.ts"/>

var auto1:Clases.Auto=new Clases.Auto("AS123SA","Toyota",250000);

var jsonObj:any=auto1.ToJson();
console.log(jsonObj.patente);
console.log(jsonObj.marca);
console.log(jsonObj.precio);
console.log(JSON.stringify(jsonObj));