function funUno(num:number):number
{
    num=num*num*num;

    return num;

}

function funDos():void
{
    console.log(funUno(5));
}

funDos();