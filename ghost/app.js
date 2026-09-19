/* DIGITO INGRESADO EN INPUT */

function numero(n) {
    document.getElementById("resultado").value += n;
}

/* OPERADORES */

function suma() {
    document.getElementById("resultado").value += " + ";
}

function resta() {
    document.getElementById("resultado").value += " - ";
}

function multiplicar() {
    document.getElementById("resultado").value += " * ";
}

function dividir() {
    document.getElementById("resultado").value += " / ";

}


/* CALCULO */
function calcular() {
    let resultado = document.getElementById("resultado").value;

    document.getElementById("resultado").value = eval(resultado)

    if (resultado.includes("/ 0")) {
        document.getElementById("resultado").value = "No se puede dividir";
        return
    }

    if (resultado.includes(" / ")) {
        document.getElementById("resultado").value = eval(resultado).toFixed(2);
    } else {
        document.getElementById("resultado").value = eval(resultado)
    }

}

/* LIMPIAR INPUT */
function limpiar() {
    document.getElementById("resultado").value = ""
}