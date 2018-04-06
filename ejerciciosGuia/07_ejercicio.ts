function miFuncion():void
{
    var contador:number=0;
    var sumador:number=0;
    while(contador<20)
    {
        sumador++;
        if(sumador%2!=0)
        {
            console.log(sumador);
            contador++;
        }
    }
}

miFuncion();