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