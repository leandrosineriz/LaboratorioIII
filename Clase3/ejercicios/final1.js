var Figuras;
(function (Figuras) {
    var Punto = /** @class */ (function () {
        function Punto(x, y) {
            this._x = x;
            this._y = y;
        }
        Punto.prototype.GetX = function () {
            return this._x;
        };
        Punto.prototype.GetY = function () {
            return this._y;
        };
        return Punto;
    }());
    Figuras.Punto = Punto;
})(Figuras || (Figuras = {}));
/// <reference path="./punto.ts"/>
var Figuras;
(function (Figuras) {
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(v1, v3) {
            this._vertice1 = v1;
            this._vertice3 = v3;
            this._vertice2 = new Figuras.Punto(v1.GetX(), v3.GetY());
            this._vertice4 = new Figuras.Punto(v3.GetX(), v1.GetY());
            this._ladoUno = this._vertice3.GetX() - this._vertice1.GetX();
            this._ladoDos = this._vertice3.GetY() - this._vertice4.GetY();
            this._perimetro = this._ladoUno * 2 + this._ladoDos * 2;
            this._area = this._ladoUno * this._ladoDos;
        }
        Rectangulo.prototype.GetArea = function () {
            return this._area;
        };
        Rectangulo.prototype.GetPerimetro = function () {
            return this._perimetro;
        };
        Rectangulo.prototype.ToString = function () {
            var text = this._ladoUno.toString();
            return this._ladoUno.toString() + " - " + this._ladoDos.toString() + " - " + this._perimetro.toString() + " - " + this._area.toString();
        };
        return Rectangulo;
    }());
    Figuras.Rectangulo = Rectangulo;
})(Figuras || (Figuras = {}));
/// <reference path="./clases1/rectangulo.ts"/>
var p1 = new Figuras.Punto(1, 2);
var p2 = new Figuras.Punto(3, 4);
var r1 = new Figuras.Rectangulo(p1, p2);
console.log(r1.ToString());
