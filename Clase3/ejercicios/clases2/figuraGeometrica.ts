
namespace Figuras2
{
export abstract class FiguraGeometrica
{
    protected _color:string;
    protected _perimetro:number;
    protected _superficie:number;

    public constructor(color:string)
    {

    }
    protected abstract CalcularDatos():void;
   

    public abstract Dibujar():string;
    

    public GetColor()
    {
        return this._color;
    }

    public ToString():string
    {
        return this._color.toString()+" - "+this._perimetro.toString()+" - "+this._superficie.toString()+" - ";
    }


}
}