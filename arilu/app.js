const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");
let solucion;

function sumar(a, b) {
	return a + b;
}

function resta(a, b) {
	return a - b;
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
			solucion = resta(num1, num2);
			break;
	}

	resultado.innerText = solucion;
});
