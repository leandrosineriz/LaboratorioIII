namespace Ejercicio1
{
    let xhtml:XMLHttpRequest=new XMLHttpRequest();

    export function AdministrarTodos()
    {
        var div:HTMLDivElement=(<HTMLDivElement>document.getElementById("todos"));
        xhtml.open("GET","./backend/ejercicio1_todos.php",true);

        xhtml.send();

        xhtml.onreadystatechange=()=>{
            if(xhtml.readyState==4 && xhtml.status==200)
            {
                div.innerHTML=xhtml.responseText;
            }
        }

    }

    export function AdministrarNombre()
    {
        var div:HTMLDivElement=(<HTMLDivElement>document.getElementById("nombre"));
        xhtml.open("GET","./backend/ejercicio1_nombre.php",true);

        xhtml.send();

        xhtml.onreadystatechange=()=>{
            if(xhtml.readyState==4 && xhtml.status==200)
            {
                div.innerHTML=xhtml.responseText;
            }
        }
    }
}