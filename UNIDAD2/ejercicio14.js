/*14. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. 
Se le solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, 
los años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro vendido. 
Realice un programa para calcular e informar el sueldo mensual del empleado, 
teniendo en cuenta que se le asigna un bono igual al 50% del seguro más caro vendido, 
un bono igual al 25% del sueldo por la cantidad de seguros vendidos y otro bono igual al 15% del sueldo por año de antigüedad.
Una vez obtenido el sueldo final, calcular e informar el valor promedio de la hora del empleado.*/

/* var valorh = prompt("Ingrese el valor de la hora trabajada:")
var horast = prompt("Ingrese la cantidad de horas trabajadas:")
var antiguedad = prompt("Ingrese su antigüedad laboral:")
var segurosv = prompt("Ingrese la cantidad de seguros vendidos:")
var seguromc = prompt("Ingrese el valor del seguro más caro vendido:")

valorh = Number(valorh)
horast = Number(horast)
antiguedad = Number(antiguedad)
segurosv = Number(segurosv)
seguromc = Number(seguromc)*/


// REDUZCO CANTIDAD DE LÍNEAS DE CÓDIGO PASANDO AL Number el prompt

const valorHora = Number(prompt("Ingrese el valor de la hora:"));
var horasTrabajadas = Number(prompt("Ingrese la cantidad de horas trabajadas en el mes:"));
var aniosAntiguedad = Number(prompt("Ingrese los años de antigüedad:"));
var segurosVendidos = Number(prompt("Ingrese la cantidad de seguros vendidos:"));
const seguroMasCaro = Number(prompt("Ingrese el valor del seguro más caro vendido:"));

/* sueldoa = valorh * horast
bonoa = seguromc * 0.50
bonob = segurosv * 0.25
bonoc = antiguedad * 0.15
sueldofinal = (sueldoa + bonoa + bonob + bonoc)/horast */

// PASO A CONSTANTES EL SUELDO BASE

const sueldoBase = valorHora * horasTrabajadas;
const bonoSeguro = (seguroMasCaro * 0.5);
var bonoSegurosVendidos = sueldoBase * (segurosVendidos * 0.25);
var bonoAntiguedad = sueldoBase * (aniosAntiguedad * 0.15);

var sueldoFinal = sueldoBase + bonoSeguro + bonoSegurosVendidos + bonoAntiguedad;
alert(`El sueldo mensual del empleado es: $${sueldoFinal.toFixed(2)}`);
// SUMO MÉTODO PARA MOSTRAR DOS DIGITOS DECIMALES EN LOS NUMEROS
var valorPromedioHora = sueldoFinal / horasTrabajadas;
alert(`El valor promedio de la hora del empleado es: $${valorPromedioHora.toFixed(2)}`);

alert("El valores ingresados son:  \n" +
    "el valor hora es: " + valorHora.toFixed(2) + "\n" +
    "la cantidad de horas es: " + horasTrabajadas + "\n" +
    "la antiguedad es : " + aniosAntiguedad + "\n" +
    "la cantidad de seguros vendidos es: " + segurosVendidos + "\n" +
    "el valor del seguro mas caro es: " + seguroMasCaro.toFixed(2) + "\n" +

    "la bonificacion 1 es : " + bonoSeguro.toFixed(2) + "\n" +
    "la bonificacion 2 es : " + bonoSegurosVendidos.toFixed(2) + "\n" +
    "la bonificacion 3 es : " + bonoAntiguedad.toFixed(2) + "\n" +
    "el valor promedio de la hora trabajada es : " + valorPromedioHora.toFixed(2) + "\n" +
    "el sueldo devaluado con la bonificació es: " + sueldoFinal.toFixed(2) + "  \n");

// console.log("El valores ingresados son: ");
// console.log("el valor hora es: " + valorHora );
// console.log("la cantidad de horas es: " + cantidadHorasTrabajadas);
// console.log("la antiguedad es : " + antiguedad);
// console.log("la cantidad de seguros vendidos es: " + segurosVendidos);
// console.log("el valor del seguro mas caro es: " + valorSeguroMasCaro);
// console.log("la bonificacion es : " + bonificacion1);
// console.log("la bonificacion es : " + bonificacion2);
// console.log("la bonificacion es : " + bonificacion3);

// console.log("el sueldo devaluado es: " + sueldo);