let boton = document.getElementById("bt1")
let resultado = document.getElementById("result")

boton.addEventListener('click', hacerSuma)
function hacerSuma() {
    let pt1 = parseInt(document.getElementById("pt1").value)
    let a =pt1*1000
    let b =pt1*100
    let c =pt1*10
    let d =pt1/10
    let e =pt1/100
    let f =pt1/1000


    r1.innerHTML = `La medida es ${a}mm`
    r2.innerHTML = `La medida es ${b}cm`
    r3.innerHTML = `La medida es ${c}dm`
    r4.innerHTML = `La medida es ${d}dm`
    r5.innerHTML = `La medida es ${e}hm`
    r6.innerHTML = `La medida es ${f}km`
    


 

}