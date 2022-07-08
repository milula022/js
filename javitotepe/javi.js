const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const cuerp = document.getElementById('cuerp')
console.log(cuerp)

boton1.addEventListener("click",mostrarFondo1);
function mostrarFondo1(){
    console.log("click"); 
    cuerp.classList.remove('bg-warning','bg-secondary')
    cuerp.classList.add("bg-dark")
   
}
boton2.addEventListener("click",mostrarFondo2);
function mostrarFondo2(){
    console.log("click"); 
    cuerp.classList.add("bg-secondary")
    cuerp.classList.remove('bg-dark','bg-warning')
}
boton3.addEventListener("click",mostrarFondo3);
function mostrarFondo3(){
    console.log("click"); 
    cuerp.classList.add("bg-warning")
    cuerp.classList.remove('bg-dark','bg-secondary')
}


