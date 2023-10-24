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
