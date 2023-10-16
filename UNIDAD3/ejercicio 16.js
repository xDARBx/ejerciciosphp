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