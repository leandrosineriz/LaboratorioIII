"use strict";
var Clases;
(function (Clases) {
    var Auto = /** @class */ (function () {
        function Auto(patente, marca, precio) {
            this._marca = marca;
            this._patente = patente;
            this._precio = precio;
        }
        Auto.prototype.ToJson = function () {
            var strRetorno = '{patente:"' + this._patente + '",marca:"' + this._marca + '",precio:"' + this._precio + '"}';
            return JSON.parse(strRetorno);
        };
        return Auto;
    }());
    Clases.Auto = Auto;
})(Clases || (Clases = {}));
