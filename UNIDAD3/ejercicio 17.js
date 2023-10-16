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