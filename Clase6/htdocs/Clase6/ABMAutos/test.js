/// <reference path="./Interface.ts"/>
var Clases;
(function (Clases) {
    var Auto = /** @class */ (function () {
        function Auto(patente, marca, precio) {
            this._marca = marca;
            this._patente = patente;
            this._precio = precio;
        }
        Auto.prototype.ToJson = function () {
            var strRetorno = '{"patente":"' + this._patente + '","marca":"' + this._marca + '","precio":' + this.GetPrecioConIva() + '}';
            return JSON.parse(strRetorno);
        };
        Auto.prototype.GetPrecioConIva = function () {
            return this._precio * 1.21;
        };
        return Auto;
    }());
    Clases.Auto = Auto;
})(Clases || (Clases = {}));
var Ajax = /** @class */ (function () {
    function Ajax() {
        var _this = this;
        this.Get = function (ruta, success, params, error) {
            if (params === void 0) { params = ""; }
            var parametros = params.length > 0 ? params : "";
            ruta = params.length > 0 ? ruta + "?" + parametros : ruta;
            _this._xhr.open('GET', ruta);
            _this._xhr.send();
            _this._xhr.onreadystatechange = function () {
                if (_this._xhr.readyState === Ajax.DONE) {
                    if (_this._xhr.status === Ajax.OK) {
                        success(_this._xhr.responseText);
                    }
                    else {
                        if (error !== undefined) {
                            error(_this._xhr.status);
                        }
                    }
                }
            };
        };
        this.Post = function (ruta, success, params, error) {
            if (params === void 0) { params = ""; }
            var parametros = params.length > 0 ? params : "";
            _this._xhr.open('POST', ruta, true);
            _this._xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            _this._xhr.send(parametros);
            _this._xhr.onreadystatechange = function () {
                if (_this._xhr.readyState === Ajax.DONE) {
                    if (_this._xhr.status === Ajax.OK) {
                        success(_this._xhr.responseText);
                    }
                    else {
                        if (error !== undefined) {
                            error(_this._xhr.status);
                        }
                    }
                }
            };
        };
        this._xhr = new XMLHttpRequest();
        Ajax.DONE = 4;
        Ajax.OK = 200;
    }
    return Ajax;
}());
/// <reference path="./Auto.ts"/>
/// <reference path="./ajax/ajax.ts"/>
var Enlace;
(function (Enlace) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.Agregar = function () {
            var patente = document.getElementById("txtPatente").value;
            var marca = document.getElementById("cboMarca").value;
            var precio = Number((document.getElementById("txtPrecio").value));
            var auto = new Clases.Auto(patente, marca, precio);
            var jsonObj = auto.ToJson();
            var strJson = JSON.stringify(jsonObj);
            if (document.getElementById("hdnIdModificacion").value == "Modificar") {
                var params = "caso=modificar&cadenaJson=" + strJson;
                var ruta = "./BACKEND/administrar.php";
                var ajax = new Ajax();
                ajax.Post(ruta, function (resultado) {
                    var retorno = JSON.parse(resultado);
                    if (retorno.TodoOK) {
                        console.log("Modificado correctamente");
                    }
                    else {
                        console.error("NO SE PUDO MODIFICAR");
                    }
                }, params, Manejadora.Fail);
                document.getElementById("btn-agregar").value = "Agregar";
                document.getElementById("hdnIdModificacion").value = "";
            }
            else {
                var params = "caso=agregar&cadenaJson=" + strJson;
                var ruta = "./BACKEND/administrar.php";
                var ajax = new Ajax();
                ajax.Post(ruta, function (resultado) {
                    var retorno = JSON.parse(resultado);
                    if (retorno.TodoOK) {
                        console.log("Agregado correctamente");
                    }
                    else {
                        console.error("NO SE PUDO AGREGAR");
                    }
                }, params, Manejadora.Fail);
            }
        };
        Manejadora.Mostrar = function () {
            var params = "caso=mostrar";
            var ruta = "./BACKEND/administrar.php";
            var ajax = new Ajax();
            ajax.Post(ruta, function (resultado) {
                Manejadora.AdministrarSpinner();
                var retorno = JSON.parse(resultado);
                var mostrar = "<table border='1'><tr><td>Patente</td><td>Marca</td><td>Precio</td><td>Edicion</td><tr>";
                retorno.forEach(function (element) {
                    mostrar += "<tr><td>" + element.patente + "</td><td>" + element.marca + "</td><td>" + element.precio +
                        "</td><td><input type='button' value='Eliminar' class='btn btn-success' onclick='Enlace.Manejadora.Eliminar(" + JSON.stringify(element) + ");' />" +
                        "<input type='button' value='Modificar' class='btn btn-success' onclick='Enlace.Manejadora.Modificar(" + JSON.stringify(element) + ");' /></tr>";
                });
                document.getElementById("divTabla").innerHTML = mostrar;
                Manejadora.AdministrarSpinner();
            }, params, Manejadora.Fail);
        };
        Manejadora.Eliminar = function (objJson) {
            var params = "caso=eliminar&cadenaJson=" + JSON.stringify(objJson);
            var ruta = "./BACKEND/administrar.php";
            var ajax = new Ajax();
            ajax.Post(ruta, function (resultado) {
                var retorno = JSON.parse(resultado);
                if (retorno.TodoOK) {
                    console.log("Eliminado correctamente");
                    Manejadora.Mostrar();
                }
                else {
                    console.error("NO SE PUDO ELIMINAR");
                }
            }, params, Manejadora.Fail);
        };
        Manejadora.Modificar = function (objJson) {
            document.getElementById("txtPatente").value = objJson.patente;
            document.getElementById("cboMarca").value = objJson.marca;
            document.getElementById("txtPrecio").value = objJson.precio;
            document.getElementById("btn-agregar").value = "Modificar";
            document.getElementById("hdnIdModificacion").value = "Modificar";
            /*
            let params="caso=modificar";

            let ruta="./BACKEND/administrar.php";

            let ajax=new Ajax();

            ajax.Post(ruta,
                (resultado:string)=> {
                    let retorno:any=JSON.parse(resultado);

                    if(retorno.TodoOK)
                    {
                        console.log("Eliminado correctamente");
                        Manejadora.Mostrar();

                    }else{
                        console.error("NO SE PUDO ELIMINAR");

                    }
                    
                }
                , params, Manejadora.Fail);

                */
        };
        Manejadora.AdministrarSpinner = function () {
            if (document.getElementById("divSpinner").style.display == "none") {
                document.getElementById("divSpinner").style.display = "block";
            }
            else {
                document.getElementById("divSpinner").style.display = "none";
            }
        };
        Manejadora.Fail = function (retorno) {
            console.clear();
            console.log("ERROR!!!");
            console.log(retorno);
        };
        return Manejadora;
    }());
    Enlace.Manejadora = Manejadora;
})(Enlace || (Enlace = {}));
