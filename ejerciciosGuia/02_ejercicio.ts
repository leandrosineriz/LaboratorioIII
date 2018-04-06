var lista:string[]=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

for(var x:number=0;x<12;x++)
{
    console.log(lista[x]+" ");
    console.log(x+1);
}

var contador:number=0;
lista.forEach(function(value){

    contador++;
    console.log(value+" "+contador);
});