// Ejercio 15
//  Se le solicita al usuario que ingrese un número. Realice un programa para informar
// si el número es cero, par o impar.

let numeroX = Number(prompt("Ingrese un número:"));

if (numeroX === 0) {
  alert(numeroX + " su número es cero");
} else if (numeroX % 2 === 0) {
  alert(numeroX + " es un número par");
} else {
  alert(numeroX + " es un número impar.");
}

// -----------------------------------------------------------------------------------------------------------------------
// Ejercicio 16
//  Se le solicita al usuario que ingrese un número. Realice un programa para informar
// si el número es múltiplo de 3.
let numero = Number(
  prompt("Ingrese un número para saber si es multiplo de 3 :")
);

if (numero % 3 === 0) {
  alert(numero + " es múltiplo de 3.");
} else {
  alert(numero + " no es múltiplo de 3.");
}
