let boton=document.getElementById("bt1")
let resultado=document.getElementById("result")

boton.addEventListener('click',hacerSuma)
function hacerSuma(){
    let pt1=parseInt(document.getElementById("pt1").value)
    let pt2=parseInt(document.getElementById("pt2").value)
    let  u=pt1+pt2
    resultado.innerHTML=`La suma es ${u}`
}
