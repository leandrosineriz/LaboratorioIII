/// <reference path="./punto.ts"/>

namespace Figuras{

export class Rectangulo 
{
    private _area:number;
    private _ladoDos:number;
    private _ladoUno:number;
    private _perimetro:number;
    private _vertice1:Punto;
    private _vertice2:Punto;
    private _vertice3:Punto;
    private _vertice4:Punto;

    public constructor(v1:Punto,v3:Punto)
    {
        this._vertice1=v1;
        this._vertice3=v3;

        this._vertice2=new Punto(v1.GetX(),v3.GetY());
        this._vertice4=new Punto(v3.GetX(),v1.GetY());

        this._ladoUno=this._vertice3.GetX()-this._vertice1.GetX();
        this._ladoDos=this._vertice3.GetY()-this._vertice4.GetY();

        this._perimetro=this._ladoUno*2+this._ladoDos*2;

        this._area=this._ladoUno*this._ladoDos;
    }

    public GetArea():number
    {
        return this._area;
    }

    public GetPerimetro()
    {
        return this._perimetro;
    }

    public ToString():string
    {
        
        return this._ladoUno.toString()+" - "+this._ladoDos.toString()+" - "+this._perimetro.toString()+" - "+this._area.toString();
    }

}
}