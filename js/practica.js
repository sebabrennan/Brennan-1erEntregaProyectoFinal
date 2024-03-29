class Usuario{
    constructor(id,nombre,apellido)
    {
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
    }
}

class Productos{
    constructor(nombre,precio) {
        this.nombre=nombre
        this.precio=precio
    }
}

const fideos = new Productos("Fideos",300)
const sorrentinos = new Productos("Sorrentinos", 400);
const panzottis = new Productos("Panzottis",400);

const productos = [fideos, sorrentinos, panzottis]

let opcionProductos = 0;

let dineroIngresado = 0;

const usuarios = [];

mostrarMenu();

function mostrarMenu()
{
    let opcion = 0;
    
    while(opcion!==3)
    {
        opcion = Number( prompt(`Seleccione una acción:
                            1. Comprar productos
                            2. Ir a Usuarios
                            3. Salir`));

        switch(opcion)
        {
            case 1:
            {
                mostrarMenuProductos();
                break;
            }
            case 2:
            {
                mostrarMenuUsuarios();
                break;
            }
            default:{
                alert("GRACIAS, HASTA PRONTO");
                break;
            }
        }
    }
}

function mostrarMenuProductos(){
    
    const opcion = prompt(`Seleccione una opcion: 
                     1. FIDEOS (${fideos.precio}ARS)
                     2. SORRENTINOS (${sorrentinos.precio}ARS)
                     3. PANZOTIS (${panzottis.precio}ARS)
                     4. FIN`);
    
    if(opcion!=4){   
        venderProducto(opcion);
    }
    
    else{
        alert("GRACIAS");
    }
}

function venderProducto(opcion)
   {
    pedirDinero(productos[opcion-1].precio)
   }

     /*  switch (opcion) 
      {
         case "1":
         {
            pedirDinero(fideosPrice)
            break;
         }
         case "2":
         {
            pedirDinero(sorrentinosPrice)
            break;
         }
         case "3":
         {
            pedirDinero(panzottisPrice)
            break;
         }
         default:
         {
            alert("opcion invalida")
            break;
         }      
      } */

function pedirDinero(priceProduct)
{
   while(dineroIngresado<priceProduct)
   {
      let dinero = Number(prompt("¿Con cuanto va a pagar?"));
            
         if(dinero<priceProduct)
         {
            alert("monto invalido")
         }
         else
         {
            dineroIngresado+=dinero;
         }
   }
         
   let cambio = dineroIngresado - priceProduct;
      alert("Su cambio es: " + cambio);
      alert("Gracias");
}   

function mostrarMenuUsuarios()
{
    let opcion = 0;
   
    while(opcion!==6)
    {
        opcion = Number( prompt(`Seleccione una acción:
                           1. Agregar Usuario
                           2. Eliminar Usuario
                           3. Modificar Usuario
                           4. Listar usuarios
                           5. Buscar Usuario
                           6. Volver al menú principal`));

        switch(opcion)
        {
            case 1:
            {
                agregarUsuario();
                break;
            }
            case 2:
            {
                eliminarUsuario();
                break;
            }
            case 3: 
            {
                modificarUsuario();
                break;
            }
            case 4:
            {
                listarUsuarios();
                break;
            }
            case 5:
            {
                buscarUsuario();
                break;
            }
            default:
            {
                mostrarMenu();
                break;
            }
        }    
   }
}

function agregarUsuario()
{      
    let id=1;
    if(usuarios.length>0)
    {
       id=usuarios[usuarios.length-1].id+1;
    }
    
    let nombre=prompt("ingrese un nombre");
    let apellido = prompt("ingrese un apellido");
    let usuario = new Usuario(id, nombre, apellido);

    usuarios.push(usuario);
}

function eliminarUsuario(){

    let id= Number(prompt("Ingrese el id del usuario que quiere eliminar"));

    let encontrado = usuarios.find((usuario)=>usuario.id===id);

    if(!encontrado)
    {
        alert("Usuario no Encontrado");
    }
    else{

        let index = usuarios.indexOf(encontrado);

        usuarios.splice(index,1);

        console.log("Borrar usuario");
        console.log(usuarios);
    }
}

function modificarUsuario()
{
    let id= Number(prompt("Ingrese el id del usuario que quiere modificar"));

    let existe = usuarios.some((usuario)=>usuario.id===id);

    if(existe)
    {
        let encontrado = usuarios.find((usuario)=>usuario.id===id);
        let nuevoNombre = prompt("Ingrese el nuevo nombre");
        let nuevoApellido = prompt("Ingrese el nuevo apellido");

        encontrado.nombre = nuevoNombre;
        encontrado.apellido= nuevoApellido;

        console.log("MODIFICACION")
        console.log(usuarios);
    }
    else
    {
        alert("Usuario no encontrado")
    }

}

function listarUsuarios(){
    console.log("LISTAR USUARIOS")
   
    usuarios.forEach(
       (usuario)=>{     
            console.log(usuario.id+" "+usuario.nombre+" "+usuario.apellido);
       }
    );
}

function buscarUsuario()
{
    let nombre = prompt("Ingresa el nombre que quieres buscar");

    let encontrados = usuarios.filter((usuario)=>usuario.nombre.toLowerCase().indexOf(nombre.toLocaleLowerCase())!==-1);

    console.log("BUSCAR USUARIOS:", encontrados);
}

