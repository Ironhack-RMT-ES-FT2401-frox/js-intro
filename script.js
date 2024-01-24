console.log("hola mundo desde script.js")

console.log("otra cosa")

// console.log SOLO se utiliza para pruebas del desarrollador.
// console.log NO HACE NINGUN EFECTO sobre el codigo


/* 
comentario de
multiples
lineas
*/


// VARIABLES



// let

// Declaración de una variable (crearla)s
let unaCaja;

console.log( unaCaja )

// Inicialización de una variable (asignar un valor/contenido)
unaCaja = "patata";

console.log( unaCaja )


// Declaración e Inicialización de una variable
let hobby = "videojuegos";

hobby // abriendo la caja y buscando el contenido

console.log( hobby )

// let hobby; // Identifier 'hobby' has already been declared

let otraCaja = hobby; // copiando el contenido en otra variable

console.log(hobby, otraCaja)



// cosas que no podemos o debemos hacer en JS

// let 1fruta; 
// no podemos empezar con numeros o caracteres especiales

// let import; 
// no podemos crear variables con nombres de palabras reservadas. https://www.w3schools.com/js/js_reserved.asp

// let micomidafavoritaenelmundo = "pasta"
// usar camelCasing

let miComidaFavoritaEnElMundo; // buena practica :)



// const

let age = 34;
console.log("let antes de cambiar", age)

age = 35; // vaciando el contenido de la caja y asignando un nuevo valor
console.log("let despues de cambiar", age)



const username = "jorge";
console.log("const antes de cambiar", username)

// username = "bob" // Assignment to constant variable.

// constantes son valores que nunca serán reemplazados



// var no la vamos a discutir hoy
// var es una palabra reservada obsoleta ES5-
// NUNCA debemos usar var en codigo nuevo. Mala practica.


// typeof

let var1 = "hola";
console.log( var1, typeof var1 ) // Strings

let var2 = 10;
console.log( var2, typeof var2 ) // Numbers

let var3 = true;
console.log( var3, typeof var3 ) // Boolean

let var4 = undefined;
console.log( var4, typeof var4 ) // Undefined

let var5 = null;
console.log(var5, typeof var5) // bug de JS. Null si es su propio tipo de data.

// undefined y null representan algo vacio. 
// undefined es un valor principalmente asignado por el programa
// null es un valor asignado por el desarrollador

let var6 = ["patata"];
console.log(var6, typeof var6) // Object

let var7 = {name: "jorge"};
console.log(var7, typeof var7) // Object



// STRINGS


let fruta1 = "fresa";
let fruta2 = "pera";
let fruta3 = "banana";

// concatenar strings

// let receta = "La receta es: " + fruta1 + ", " + fruta2 + " y " + fruta3; // crea un nuevo string

// interpolacion de strings `` backticks
let receta = `La receta es: ${fruta1}, ${fruta2}, aguacate y ${fruta3}`



console.log(receta)



// indexación y posiciones en strings


let simplestring = "hola";
//                  ||||
//                  0123

// propiedad length
console.log(simplestring.length) // 4

// notación de corchetes
console.log(simplestring[0])

// como buscamos el ultimo caracter del string??
console.log( simplestring[ simplestring.length - 1 ] )


// METODOS de strings
// metodos son acciones especiales que podemos hacer sobre la data

let longWord = "bananaramawakawakaehehsamiramira"

console.log( longWord.indexOf("") ) // el indice de el substring que agregue dentro de los parentesis


console.log( longWord.slice(16, 20) )

let result = longWord.slice(0, 6) 
console.log( result[0].toUpperCase() + result.slice(1) )

console.log( longWord.slice(longWord.length / 2) )



// console.log( longWord.slice(0, longWord.indexOf("w")) + longWord.slice( longWord.indexOf("s") ) )
let indexofW = longWord.indexOf("w");
let indexofS = longWord.indexOf("s");
let firstSentence = longWord.slice(0, indexofW)
let secondSentence = longWord.slice(indexofS)
console.log(firstSentence + secondSentence)

console.log(longWord.replace("wakawakaeheh", ""))


// NUMBER

console.log(10, -30, 7.45)

let num1 = 6;
let num2 = 2;

console.log(num1 + num2) // operador de suma
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 ** num2)
console.log(num1 % num2) // no tiene nada que ver con porcentaje. Operador modulo. El restante de una posible división.


console.log(num1 % num2) // 2 + 2 + 2 => restante 0
console.log(10 % 3) // 3 + 3 + 3 => restante 1

// al hacer modulos 2 sabes si es par o impar

console.log(19847947238 % 2) // o 0 (PAR) o 1 (IMPAR)


// operadores de asignacion

let myAge = 28;

console.log(myAge)

// incrementar cualquier valor anterior en 1
myAge = myAge + 1
// 1. abre la caja myAge => 28
// 2. suma 28 + 1 => 29
// 3. ese valor lo almacena en myAge

console.log(myAge)

myAge += 1
console.log(myAge)

myAge++ // ++ siempre es incremento en 1. -- es decremento en 1
console.log(myAge)

// myAge = myAge + 1
// myAge += 1
// myAge++
// hacen exactamente lo mismo

myAge-- // ejemplo de reducir en 1

console.log(myAge)



// Coerción

console.log( 3 + 5 ) // 8
console.log( "3" + "5" ) // "35"

console.log( "5" - "3" ) // 2. COERCION => 5 - 3 => 2
// el operador - es un operador unicamente matematico
// Coercion donde intenta cambiar el tipo de data de uno a otro


console.log( "JavaScript" - "Script" ) // Coerción. 
// NaN no es un error
// NaN => Not a Number


console.log( 5 + "3" )
// 1. + => operador de concatenacion
// 2. + => operador de suma

// si algun es un string. Contactena.
// si ninguno es string. Suma.


// Math => herramienta que nos permite hacer operaciones matematicas complejas

let max = Math.max( 10, 40, 1000, 2, 30 )
console.log(max)

let min = Math.min( 10, 40, 1000, 2, 30 )
console.log(min)


// numeros aleatorios
console.log(Math.random() * 10) // 0 y 0.99999999
console.log(Math.random()) // 10 y 9.99999999


// BOOLEANS


console.log( true, false )


// OPERADOR (NOT) !

let positiveBool = true;

console.log(!positiveBool) // invierte el valor booleano



let food1 = "hamburguesa"
let food2 = "pasta"
let food3 = "hamburguesa"

// operadores de comparacion
console.log(food1 === food2) // false
console.log(food1 === food3) // true
console.log(food1 !== food2) // true

console.log(10 > 20)
console.log(50 >= 50)


console.log("a" > "c") // false => ASCII code. 97 > 99
console.log("x" > "g") // true => ASCII code. 120 > 103



let name1 = "francisco"
let name2 = "josep"

console.log(name1[0] < name2[0])


console.log( "5" === "5" ) // true
console.log( "5" === 5 ) // false
// === => operadorar de comparacion ESTRICTA
// compara tanto el valor como el tipo de data

console.log( "5" == 5 ) // true
// == => permite coerción


// Buena practicas. SIEMPRE usar triple igual para comparación


// Operadores logicos && y ||

console.log( "manzanas" === "manzanas" && "bananas" === "peras" )
//                      true           &&           false
// Si al menos una es falsa, TODO es falso



console.log( "manzanas" === "manzanas" || "bananas" === "peras" )
//                      true           &&           false
// Si al menos una es true, TODO es true



// CONDICIONALES


// if
/* 
if (condicion o condiciones) {
  lo que ocurren si la condicion final es true
}

*/

let naranjas = 0;

// if (naranjas === 0) {
//   console.log("No tienes naranjas para hacer zumo :(")
// }

// if (naranjas > 0 && naranjas < 4) {
//   console.log("Puedes preparar un zumo :)")
// }

// if (naranjas >= 4) {
//   console.log("puedes hacer muchos zumos :D")
// }

if (naranjas === 0) {
  console.log("No tienes naranjas para hacer zumo :(")
} else if (naranjas > 0 && naranjas < 4) {
  console.log("Puedes preparar un zumo :)")
} else if (naranjas >= 4) {
  console.log("puedes hacer muchos zumos :D")
} else {
  console.log("error. nadie tiene zumo :(")
}



// SWITCH

let color = "transparente"

/* 
switch(elementoAEvaluar) {
  case "valor a comparar":
    lo que ocurre si es verdadero.
  case "" ...  
}
*/

switch(color) {

  case "amarillo":
    // Esto ocurre si la variable es estricamente igual a el case
    console.log("cosas de este color " + color + ": bananas, el sol, lapices")
    break // deten la ejecución del switch
  case "azul":
    console.log("cosas de este color " + color + ": cielo, el mar")
    break // deten la ejecución del switch
  default: 
    // en cualquier caso que no haya arriba
    console.log("no conozco el color indicado :(")
}