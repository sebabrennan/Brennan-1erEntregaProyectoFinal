class Usuario{
    constructor(id,nombre,apellido)
    {
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
let sorrentinosPrice = 400;
let fideosPrice = 300;
let panzottisPrice = 400;
let opcionProductos = 0; 

let dineroIngresado = 0;

const usuarios = [];

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

mostrarMenu();

function mostrarMenuProductos()
{
    const opcion = prompt(`Seleccione una opcion: 
                     1. FIDEOS (${fideosPrice}ARS)
                     2. SORRENTINOS (${sorrentinosPrice}ARS)
                     3. PANZOTIS (${panzottisPrice}ARS)
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
      switch (opcion) 
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
      }
   }

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
   
    while(opcion!==5)
    {
        opcion = Number( prompt(`Seleccione una acción:
                           1. Agregar Usuario
                           2. Eliminar Usuario
                           3. Modificar Usuario
                           4. Listar usuarios
                           5. Volver al menú principal`));

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
            case 4:
            {
                listarUsuarios();
                break;
            }
            default:{
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


function listarUsuarios(){
   console.log("LISTAR USUARIOS")
   
   usuarios.forEach(
       (usuario)=>{     
            console.log(usuario.id+" "+usuario.nombre+" "+usuario.apellido);
       }
   );
}


