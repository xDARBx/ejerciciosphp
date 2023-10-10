//11. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e informar la suma y el promedio.

var n1 = prompt("Ingrese el primer número: ")
n1 = Number(n1)

var n2 = prompt("Ingrese el segundo número: ")
n2 = Number(n2)

var n3 = prompt("Ingrese el tercer número: ")
n3 = Number(n3)

var n4 = prompt("Ingrese el cuarto número: ")
n4 = Number(n4)


var calcular = n1 + n2 + n3 + n4
var promedio = calcular / 4

alert("La sumatoria de los números es de: " + calcular +  " y el promedio es de: " + promedio)
