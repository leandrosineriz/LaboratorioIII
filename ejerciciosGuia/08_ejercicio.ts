function miFuncion(num:number):void
{
    var auxNum:number=num;

    for(num;num>1;num--)
    {      
        auxNum=auxNum*(num-1);
        console.log(auxNum);
    }
}

miFuncion(5);