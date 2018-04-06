function miFuncion(num:number,texto?:string):void
{
    if(texto)
    {
        for(var x:number=0;x<num;x++)
        {
            console.log(texto);
        }
    }
    else
    {
        console.log(num-num*2);
    }
}

miFuncion(5);