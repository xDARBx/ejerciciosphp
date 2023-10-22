/*26. Se le solicita al usuario que ingrese una cantidad desconocida de números. Realice
    un programa para calcular e informar:
    a. La sumatoria de los valores ingresados.
    b. El menor valor ingresado.
    c. El mayor valor ingresado.*/



let valores = []; // tambien se puede definir como new Array();
let menorValor = null;
let mayorValor = null;
let sigo = true;

let dialogo = "Elija alguna de las siguientes opciones: \n\n" +
    "1- ingresar un numero entero \n" +
    "2- terminar de ingresar y reportar máximo y mínimo";


do {
    var dato = parseInt(prompt(dialogo));
    if (!isNaN(dato)) {
        switch (dato) {

            case 1:
                var dato = parseInt(prompt("Ingrese un número "));
                if (!isNaN(dato)) {
                    valores.push(dato);
                    if(menorValor ==null || menorValor > dato){
                        menorValor= dato;
                    }
                    if(mayorValor ==null || mayorValor < dato){
                        mayorValor= dato;
                    }
                }else {
                    alert("la opción ingresada no es un número")
                }

                break;
            case 2:
                sigo = false;
                break;

        }


    } else {
        alert("la opción ingresada no es un número que corresponde a una opcion válida")
    }


    } while (sigo)

alert ("Los valores ingresados fueron: " + valores +
       "\n el Máximo valor es: " + mayorValor   +
       "\n el Mínimo valor es: " + menorValor );

