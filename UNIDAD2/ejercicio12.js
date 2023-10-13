//12. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que ingrese el valor de la hora y la cantidad de horas trabajadas en el mes. Realice un programa para calcular e informar el sueldo mensual del empleado.

/*var valorhora = prompt("Ingrese el valor de su hora laboral")
valorhora = Number(valorhora)

var horastrabajadas = prompt("Ingrese la cantidad de horas trabajadas")
horastrabajadas = Number(horastrabajadas)

var sueldo = valorhora * horastrabajadas 

alert("Usted cobrará un sueldo de: $" + sueldo + " éste mes")*/

const valorHora = Number(prompt("Ingrese el valor de su hora laboral"));
const horasTrabajadas = Number(prompt("Ingrese la cantidad de horas trabajadas"));

const sueldo = valorHora * horasTrabajadas;

alert("Usted cobrará un sueldo de: $" + sueldo + " este mes");