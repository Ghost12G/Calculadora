let msj = document.getElementById("Resultado");

function farengei() {
    let input = document.getElementById("calculo").value;
    let formula = (input * 1.8) + 32
    msj.textContent = formula
}


function celsius() {
    let input = document.getElementById("calculo").value;
    let formula = (input - 32) / 1.8
    msj.textContent = formula.toFixed(4);
}