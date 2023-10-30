// 23. Se le solicita al usuario que ingrese los extremos de un rango numérico y una 
// cantidad de valores desconocidos.
// Realice un programa para informar si cada número está dentro del rango.
// Si está en rango, informar si el número es par.
// Si no está dentro del rango, informar si es número es impar.
// Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números 
// enteros.


function parImpar() {
    let number1 = parseInt(document.getElementById('number1ParImpar').value);
    let number2 = parseInt(document.getElementById('number2ParImpar').value);
    let number3 = parseInt(document.getElementById('number3ParImpar').value);

    let resultado = "";
    if(number3 >= number1 && number3 <= number2 && number2 - number1 >= 5){
        if(number3 % 2 == 0){
            resultado="El numero esta dentro del rango y es par";
        }else{
            resultado="El numero esta dentro del rango y es impar";
        }
    }else if(number3 < number1 || number3 > number2){
        resultado="El numero a evaluar no esta dentro del rango informado";
    }else if(number2 - number1 < 5){
        resultado="El rango debe tener una diferencia minima de 5 numeros enteros";
    }
    console.log(resultado)
    document.getElementById('resultParImpar').innerHTML = resultado;
}
