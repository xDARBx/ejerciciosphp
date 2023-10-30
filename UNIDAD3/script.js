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

//Ejercicio 17
//17. Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si el valor ingresado es una vocal.

function Vocal(letra) {
    var letra = prompt("Ingrese una letra: ").toLowerCase();
    
    if ( letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    alert("Es una vocal :D")
   } else {
    alert("No es una vocal :(")
   }
}

Vocal()

/*18. Se le solicita al usuario que ingrese los extremos de un rango numérico y un número. 
Realice un programa para informar si el número está dentro del rango.
Si está en rango, informar si el número es par.
Si no está dentro del rango, informar si el número es impar.
Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números enteros.*/
if (extremoSuperior - extremoInferior < 5) {
    alert("La diferencia mínima del rango debe ser de al menos 5 números enteros.");
} else {
    if (numero >= extremoInferior && numero <= extremoSuperior) {
        if (numero % 2 === 0) {
            alert("El número es par.");
        } else {
        alert("El número es impar.");
        }
    } else {
        alert("El número está fuera de rango.");
    }
}

/*19. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice un programa para calcular e informar 
la operación solicitada entre ambos números. */
var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
var operador = prompt("Ingresa un operador (+, -, *, /):");
var resultado;

switch (operador) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            alert("No se puede dividir por cero.");
        }
        break;
    default:
        alert("Ingrese un operador válido.");
        break;
}

if (resultado !== undefined) {
    alert("El resultado de la operación es: " + resultado);
}


/*20. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el algoritmo para informar si el triángulo 
es equilátero, isósceles o escaleno.*/
var lado1 = parseFloat(prompt("Ingresa el valor del lado 1:"));
var lado2 = parseFloat(prompt("Ingresa el valor del lado 2:"));
var lado3 = parseFloat(prompt("Ingresa el valor del lado 3:"));

if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3) {
    alert("Es un triángulo equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert("Es un triángulo isósceles");
} else {
    alert("Es un triángulo escaleno");
}


// -----------------------------------------------------------------------------------------------------------------------
//Ejercicio 21
/*21.Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al
usuario que ingrese la categoría a la que pertenece que define el sueldo básico
mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las
horas extras. 
Se sabe que:
a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500
más.
b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000
más.
Realice un programa para calcular e informar el sueldo mensual del empleado,
indicando si su sueldo supera o no los u$s 4000*/



// Objeto para modelar la información de sueldo y horas extras
var categoriasSueldo = {
  1: 2000, // categoriaID: sueldo basico
  2: 3000, 
  3: 4000  
};
function calculoBonificacion(categoriaId, horasExtras){
var bonificacion= 0.0;
      if(categoriaId == 1 && horasExtras > 20){
          bonificacion=  500;
      }
      if(categoriaId == 3 && horasExtras > 30){
          bonificacion=  1000;
      }
return bonificacion;

}

// Ejemplo de cómo obtener el sueldo básico mensual para la categoría ingresada por el usuario
var categoriaIngresada = prompt("Ingrese la categoría a la que pertenece (1, 2 o 3):");
var sueldoBasico = categoriasSueldo[categoriaIngresada];
var bonificacion =0.0;

// Ejemplo de cómo obtener las horas extras ingresadas por el usuario
var horasExtras = prompt("Ingrese la cantidad de horas extras:");

var sueldo = sueldoBasico +  calculoBonificacion(categoriaIngresada , horasExtras );
var informe400="no supera los 4000 pesos";
if (sueldo > 4000){
  informe400="si supera los 4000 pesos";
}


alert("El valores ingresados son:  \n" +
  "el id de la categoria : " + categoriaIngresada + "\n" +
  "la cantidad de horas es: " + horasExtras + "\n" +
  "el sueldo basico es: " + sueldoBasico + "\n" +
  "el sueldo total es: " + sueldo + "\n" +
  "el informe determina que " + informe400 );
