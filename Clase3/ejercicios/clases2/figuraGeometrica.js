"use strict";
var Figuras2;
(function (Figuras2) {
    var FiguraGeometrica = /** @class */ (function () {
        function FiguraGeometrica(color) {
        }
        FiguraGeometrica.prototype.GetColor = function () {
            return this._color;
        };
        FiguraGeometrica.prototype.ToString = function () {
            return this._color.toString() + " - " + this._perimetro.toString() + " - " + this._superficie.toString() + " - ";
        };
        return FiguraGeometrica;
    }());
})(Figuras2 || (Figuras2 = {}));
//# sourceMappingURL=figuraGeometrica.js.map