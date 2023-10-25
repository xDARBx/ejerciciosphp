/*24. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice
un programa para calcular e informar cada operación deseada entre los dos números.
Ese proceso se puede repetir mientras lo desee el usuario. Todos los valores deben ser
validados.*/



let notas = []; // tambien se puede definir como new Array();
let aprobados = null;
let desaprobados = null;
let promedio = null;
let sigo = true;
let sumatoria = 0.0;
let dato1= null;
let dato2=null;
let operador= null;
let resultado=0.0;

let dialogo = "Elija alguna de las siguientes opciones: \n\n" +
    "1- ingresar dos numeros y un operados  \n" +
    "2- terminar de operar y salir"


do {
    var dato = parseInt(prompt(dialogo));
    if (!isNaN(dato)) {
        switch (dato) {

            case 1:

                 do{
                    dato1 = parseFloat(prompt("Ingrese un primer número: "));
                    if (isNaN(dato1)) {
                        alert("la opción ingresada no es un número, vuelva a ingresar el primer número");
                        dato1=null;
                   }
                 }while(!Number(dato1))

                 do{
                    dato2 = parseFloat(prompt("Ingrese un segundo número: "));
                    if (isNaN(dato2)) {
                         alert("la opción ingresada no es un número, vuelva a ingresar el segundo número");
                        dato2=null;
                   }
                 }while(!Number(dato2))
                 
                 do{
                    operador = prompt("Ingrese un operador: + , - , / , *");
                    switch(operador){
                       case '+' : 
                                    resultado = dato1 + dato2;
                                    alert("La operacion es una suma y el resultado es: " + resultado.toFixed(2));
                                      break;
                        case '-' : 
                                    resultado = dato1 - dato2;
                                    alert("La operacion es una resta y el resultado es: " + resultado.toFixed(2));
                                    break;
                        case '/' : 
                                    resultado = dato1 / dato2;
                                    alert("La operacion es una división  y el resultado es: " + resultado.toFixed(2));
                                    break;
                        case '*' : 
                                    resultado = dato1 * dato2;
                                    alert("La operacion es una multiplicación y el resultado es: " + resultado.toFixed(2));
                                    break; 
                        default :   
                                    operador= null;
                                    alert("el operador es inválido , ingreselo nuevamente");       
                  }
                   
                 }while(operador == null )

                break;
            case 2:
                sigo = false;
                break;
        }
    } else {
        alert("la opción ingresada no es un número que corresponde a una opcion válida")
    }


    } while (sigo)



