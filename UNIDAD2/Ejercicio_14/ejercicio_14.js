/*14. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le
solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los
años de antigüedad, 
la cantidad de seguros vendidos y 
el valor del seguro más caro
vendido. Realice un programa para calcular e informar el sueldo mensual del
empleado, teniendo en cuenta que se le asigna un bono igual al 

50% del seguro máscaro vendido, 
un bono igual al 25% del sueldo por la cantidad de seguros vendidos y
otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo
final, calcular e informar el valor promedio de la hora del empleado.*/



var valorHora = 0.0;
var cantidadHorasTrabajadas = 0;
var antiguedad= 0;
var segurosVendidos= 0;
var valorSeguroMasCaro= 0.0;

// Solicitar al usuario su nombre y apellido
valorHora = prompt("Por favor, ingrese el valor de la hora:");
cantidadHorasTrabajadas = prompt("Por favor, ingrese la cantidad de horas trabajadas:");
antiguedad = prompt("Por favor, ingrese la antiguedad:");

segurosVendidos = prompt("Por favor, ingresela cantidad de seguros vendidos:");
valorSeguroMasCaro = prompt("Por favor, ingrese el valor del seguro mas caro:");

var sueldo = valorHora  * cantidadHorasTrabajadas;
var sueldoAnual = sueldo * 12.0 ;
var bonificacion1 = valorSeguroMasCaro * 0.5;
var bonificacion2 = sueldo * 0.25 * segurosVendidos ;
var bonificacion3 = sueldo * 0.15 * antiguedad ;

sueldo = sueldo + bonificacion1 + bonificacion2 + bonificacion3; 


alert("El valores ingresados son:  \n" +
    "el valor hora es: " + valorHora + "\n" +
    "la cantidad de horas es: " + cantidadHorasTrabajadas + "\n" +
    "la antiguedad es : " + antiguedad + "\n" +
    "la cantidad de seguros vendidos es: " + segurosVendidos + "\n" +
    "el valor del seguro mas caro es: " + valorSeguroMasCaro + "\n" +

    "la bonificacion 1 es : " + bonificacion1 + "\n" +
    "la bonificacion 1 es : " + bonificacion2 + "\n" +
    "la bonificacion 1 es : " + bonificacion3 + "\n" +
    "el valor promedio de la hora trabajada es : " + valorPromedioHora + "\n" +
    "el sueldo devaluado con la bonificació es: " + sueldo + "  \n");

console.log("El valores ingresados son: ");
console.log("el valor hora es: " + valorHora );
console.log("la cantidad de horas es: " + cantidadHorasTrabajadas);
console.log("la antiguedad es : " + antiguedad);
console.log("la cantidad de seguros vendidos es: " + segurosVendidos);
console.log("el valor del seguro mas caro es: " + valorSeguroMasCaro);
console.log("la bonificacion es : " + bonificacion1);
console.log("la bonificacion es : " + bonificacion2);
console.log("la bonificacion es : " + bonificacion3);

console.log("el sueldo devaluado es: " + sueldo);
