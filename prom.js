let boton = document.getElementById("bt1")
let resultado = document.getElementById("result")

boton.addEventListener('click', hacerSuma)
function hacerSuma() {
    let pt1 = parseInt(document.getElementById("pt1").value)
    let pt2 = parseInt(document.getElementById("pt2").value)
    let pt3 = parseInt(document.getElementById("pt3").value)
    let pt4 = parseInt(document.getElementById("pt4").value)
    let u = (pt1 + pt2 + pt3 + pt4) / 4
    resultado.innerHTML = `El promedio es ${u}`

    if (u >= 7) {
        resultado.classList.remove('bg-danger')
        resultado.classList.add('bg-success')
    } else {
        resultado.classList.remove('bg-success')
        resultado.classList.add('bg-danger')
    }

}