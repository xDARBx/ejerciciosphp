//13. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de antigüedad en la empresa. Realice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna un bono mensual igual al 15% del sueldo por año de antigüedad.

var valorh = prompt("Ingrese el valor de la hora trabajada:")
var horast = prompt("Ingrese la cantidad de horas trabajadas:")
var antiguedad = prompt("Ingrese su antigüedad laboral:")

valorh = Number(valorh)
horast = Number(horast)
antiguedad = Number(antiguedad)

var sueldo = valorh * horast
var sueldob = (sueldo * 15)/100 * antiguedad
alert("Usted va a cobrar un sueldo de: $" + (sueldo + sueldob))
