const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");
let solucion;

function sumar(a, b) {
	return a + b;
}

function restar(a, b) {
	return a - b;
}

function multiplicar(a, b) {
	return a * b;
}

function dividir(a, b) {
	return a / b;
}

btn.addEventListener("click", () => {
	const num1 = Number(document.getElementById("a").value);
	const num2 = Number(document.getElementById("b").value);
	const operacion = document.getElementById("operacion").value;
	
	switch (operacion) {
		case "suma":
			solucion = sumar(num1, num2);
			break;

		case "resta":
			solucion = restar(num1, num2);
			break;

		case "multiplicacion":
			solucion = multiplicar(num1, num2);
			break;

		case "division":
			solucion = dividir(num1, num2);
			break;
	}

	resultado.innerText = solucion;
});
