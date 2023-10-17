/*27. Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre,
M: Mujer), edad (en años) y altura (en centímetros). Realice un programa para calcular
e informar:
a. El porcentaje de mujeres mayores a 25 años.
b. El porcentaje de hombres menores de 18 años.
c. El promedio de edad de las mujeres.
d. El promedio de altura de los hombres.
e. La menor edad ingresada.
f. La mayor altura ingresada*/



/**
 Se define la estructura de objetos  de la siguiente manera :
             {"sexo": ["mujer", "hombre", nobinario], 
              "edad": numero, 
              "altura": numero}

 * 
 */

var encuestas = [{ "sexo": "mujer", "edad": 15, "altura": 165 },
{ "sexo": "hombre", "edad": 27, "altura": 170 },
{ "sexo": "hombre", "edad": 31, "altura": 167 },
{ "sexo": "hombre", "edad": 37, "altura": 163 },
{ "sexo": "mujer", "edad": 42, "altura": 170 },
{ "sexo": "hombre", "edad": 46, "altura": 173 },
{ "sexo": "mujer", "edad": 26, "altura": 168 },
{ "sexo": "hombre", "edad": 22, "altura": 181 },
{ "sexo": "hombre", "edad": 11, "altura": 177 },
{ "sexo": "mujer", "edad": 50, "altura": 162 },
{ "sexo": "mujer", "edad": 22, "altura": 165 },
{ "sexo": "mujer", "edad": 30, "altura": 165 },
{ "sexo": "mujer", "edad": 17, "altura": 155 },
{ "sexo": "hombre", "edad": 21, "altura": 182 },
{ "sexo": "hombre", "edad": 22, "altura": 179 },
{ "sexo": "hombre", "edad": 29, "altura": 178 },
{ "sexo": "mujer", "edad": 18, "altura": 159 },
{ "sexo": "mujer", "edad": 25, "altura": 160 },
{ "sexo": "nobinario", "edad": 22, "altura": 165 },
{ "sexo": "nobinario", "edad": 30, "altura": 165 },
{ "sexo": "nobinario", "edad": 17, "altura": 155 },
{ "sexo": "nobinario", "edad": 21, "altura": 182 },
{ "sexo": "nobinario", "edad": 22, "altura": 179 },
{ "sexo": "nobinario", "edad": 29, "altura": 178 },
{ "sexo": "nobinario", "edad": 18, "altura": 159 }
];

// encuestas.[i].sexo 
// encuestas.[i].edad 
// encuestas.[i].altura 
var totalPoblacion = encuestas.length;
var cantMujeresMas25 = 0;
var cantHombresMenos18 = 0;
var cantidadMujeres = 0;
var sumaEdadMujeres = 0;
var cantHombres = 0;
var sumaAlturasHombres = 0;
var menorEdad = null;
var mayorAltura = null;

function estadistica() {
    for (var i = 0; i < encuestas.length; i++) {

        if (encuestas[i].sexo == "mujer") {
            cantidadMujeres = cantidadMujeres + 1;
            sumaEdadMujeres = sumaEdadMujeres + encuestas[i].edad;
            if (encuestas[i].edad > 25) {
                cantMujeresMas25 = cantMujeresMas25 + 1;
            }
        }

        if (encuestas[i].sexo == "hombre") {
            cantHombres = cantHombres + 1;
            sumaAlturasHombres = sumaAlturasHombres + encuestas[i].altura;
            if (encuestas[i].edad < 18) {
                cantHombresMenos18 = cantHombresMenos18 + 1;
            }
        }

        if (menorEdad == null) {
            menorEdad = encuestas[i].edad;
        } else if (menorEdad > encuestas[i].edad) {
            menorEdad = encuestas[i].edad;
        }

        if (mayorAltura == null) {
            mayorAltura = encuestas[i].altura;
        } else if (mayorAltura < encuestas[i].altura) {
            mayorAltura = encuestas[i].altura;
        }

    }
}

estadistica();
var porcentajeMujeresMas25 =  ((cantMujeresMas25 *100.0)/ cantidadMujeres).toFixed(2);
var porcentajeHombresMenos18 = ((cantHombresMenos18 *100.0)/ cantHombres).toFixed(2);
var promedioEdadMujeres =   (sumaEdadMujeres /cantidadMujeres).toFixed(2);
var promedioAlturaHombres = (sumaAlturasHombres /cantHombres).toFixed(2);

alert("El porcentaje de mujeres mayores a 25 años: " + porcentajeMujeresMas25 + "\n" +
    "El porcentaje de hombres menores de 18 años: " + porcentajeHombresMenos18 + "\n" +
    "El promedio de edad de las mujeres: " + promedioEdadMujeres + "\n" +
    "El promedio de altura de los hombres: " + promedioAlturaHombres + "\n" +
    "La menor edad ingresada: " + menorEdad + "\n" +
    "ELa mayor altura ingresada: " + mayorAltura );

