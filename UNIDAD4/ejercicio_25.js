/*25. Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una
    comisión. Se desconoce la cantidad de alumnos. Realice el algoritmo para informar:
    El porcentaje de alumnos aprobados (nota igual o superior a 4).
    El porcentaje de alumnos desaprobados (nota inferior a 4).
    El promedio de las notas.
    Tenga en cuenta que solamente las notas pueden ir del 1 al 10*/



let notas = []; // tambien se puede definir como new Array();
let aprobados = null;
let desaprobados = null;
let promedio = null;
let sigo = true;
let sumatoria = 0.0;

let dialogo = "Elija alguna de las siguientes opciones: \n\n" +
    "1- ingresar un numero entero \n" +
    "2- terminar de ingresar y reportar porcentajes y promedios";


do {
    var dato = parseInt(prompt(dialogo));
    if (!isNaN(dato)) {
        switch (dato) {

            case 1:
                var dato = parseFloat(prompt("Ingrese una nota: "));
                if (!isNaN(dato)) {
                    notas.push(dato);

                } else {
                    alert("la opción ingresada no es un número parecido a una nota")
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


if (notas != [] && notas.length > 0) {

    for (i = 0; i < notas.length; i++) {
        if (notas[i] >= 4.0) {
            aprobados++;

        } else {
            desaprobados++;
        }
        sumatoria = sumatoria + notas[i];
    }

    alert("Los valores ingresados fueron: " + notas +
        "\n el porcentaje  de alumnos aprobados es: " + ((aprobados * 100) / notas.length).toFixed(2) +
        "\n el porcentaje  de alumnos desaprobados es: " + ((desaprobados * 100) / notas.length).toFixed(2) +
        "\n el promedio es: " + (sumatoria / notas.length).toFixed(2));

} else {
    alert("No fueron ingresadas las notas");
}

