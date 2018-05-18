/// <reference path="./Auto.ts"/>
/// <reference path="./ajax/ajax.ts"/>
namespace Enlace{
    export class Manejadora{
        public static Agregar():void{

            let patente:string=(<HTMLInputElement>document.getElementById("txtPatente")).value;
            let marca:string=(<HTMLInputElement>document.getElementById("cboMarca")).value;
            let precio:number=Number(((<HTMLInputElement>document.getElementById("txtPrecio")).value));

            let auto:Clases.Auto=new Clases.Auto(patente,marca,precio);

            let jsonObj=auto.ToJson();

            let strJson=JSON.stringify(jsonObj);

            if((<HTMLInputElement>document.getElementById("hdnIdModificacion")).value=="Modificar")
            {
                let params="caso=modificar&cadenaJson="+strJson;

                let ruta="./BACKEND/administrar.php";

                let ajax=new Ajax();

                ajax.Post(ruta, 
                (resultado:string)=> {
                    let retorno:any=JSON.parse(resultado);
                    if(retorno.TodoOK)
                    {
                        console.log("Modificado correctamente");

                    }else{
                        console.error("NO SE PUDO MODIFICAR");

                    }
                    
                }
                , params, Manejadora.Fail);

                (<HTMLInputElement>document.getElementById("btn-agregar")).value="Agregar";
                (<HTMLInputElement>document.getElementById("hdnIdModificacion")).value="";


            }
            else
            {
            let params="caso=agregar&cadenaJson="+strJson;

            let ruta="./BACKEND/administrar.php";

            let ajax=new Ajax();

            ajax.Post(ruta, 
                (resultado:string)=> {
                    let retorno:any=JSON.parse(resultado);
                    if(retorno.TodoOK)
                    {
                        console.log("Agregado correctamente");

                    }else{
                        console.error("NO SE PUDO AGREGAR");

                    }
                    
                }
                , params, Manejadora.Fail);
            }

        }

        public static Mostrar()
        {
            let params="caso=mostrar";

            let ruta="./BACKEND/administrar.php";

            let ajax=new Ajax();

            Manejadora.AdministrarSpinner();
            ajax.Post(ruta, 
                (resultado:string)=> {
                    
                    let retorno:any=JSON.parse(resultado);
                    
                    var mostrar = "<table border='1'><tr><td>Patente</td><td>Marca</td><td>Precio</td><td>Edicion</td><tr>";

                    
                    retorno.forEach((element:any) => {
                        mostrar += "<tr><td>" + element.patente + "</td><td>" + element.marca + "</td><td>" + element.precio +
                        "</td><td><input type='button' value='Eliminar' class='btn btn-success' onclick='Enlace.Manejadora.Eliminar(" + JSON.stringify(element) + ");' />" +
                        "<input type='button' value='Modificar' class='btn btn-success' onclick='Enlace.Manejadora.Modificar(" + JSON.stringify(element) + ");' /></tr>";
                        
                });
                    
                    (<HTMLDivElement>document.getElementById("divTabla")).innerHTML=mostrar;
                    
                }
                , params, Manejadora.Fail);
                Manejadora.AdministrarSpinner();


        }

        public static Eliminar(objJson:JSON)
        {


            let params="caso=eliminar&cadenaJson="+JSON.stringify(objJson);

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

        }

        public static Modificar(objJson:any)
        {


            (<HTMLInputElement>document.getElementById("txtPatente")).value=objJson.patente;
            (<HTMLInputElement>document.getElementById("cboMarca")).value=objJson.marca;
            (<HTMLInputElement>document.getElementById("txtPrecio")).value=objJson.precio;
            (<HTMLInputElement>document.getElementById("btn-agregar")).value="Modificar";
            (<HTMLInputElement>document.getElementById("hdnIdModificacion")).value="Modificar";

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
        }

        private static AdministrarSpinner()
        {
            if((<HTMLDivElement>document.getElementById("divSpinner")).style.display=="none")
            {
                (<HTMLImageElement>document.getElementById("imgSpinner")).src="./BACKEND/gif-load.gif";
                (<HTMLDivElement>document.getElementById("divSpinner")).style.display="block";
                
            }    
            else
            {
                //(<HTMLDivElement>document.getElementById("divSpinner")).style.display="none";
                (<HTMLImageElement>document.getElementById("imgSpinner")).src="./BACKEND/descarga.jpg";
                (<HTMLDivElement>document.getElementById("divSpinner")).style.display="none";
            }


        }

        static Fail(retorno:string):void {
            console.clear();
            console.log("ERROR!!!");
            console.log(retorno);
        }
    }
}