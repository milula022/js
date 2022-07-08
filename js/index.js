console.log("Me lees?")
let edad= 17; 
/*
Variables (cambia)
constantes(no cambian)
*/

//defino o declaro constante
const mensaje = document.getElementById('mensaje');
//selecciono el boton
const boton = document.getElementById('boton');
//escuchar un evento particular
boton.addEventListener('click',mostrarFondo);
//crear la funcion mostrar fondo
function mostrarFondo(){
    console.log("click");
    mensaje.classList.add('bg-success');
}
//selccionamos mensaje y le agregamos o cambiamos el contenido
mensaje.textContent = "Desde Javascript";
//eliminar clases
mensaje.classList.remove('bg-primary');
//Agregar una clase de CSS
//mensaje.classList.add('text-center', 'bg-danger');

//funcion
function mostrarTexto(e){
    console.log(e);
}
//invocacion de la funcion
mostrarTexto(edad);