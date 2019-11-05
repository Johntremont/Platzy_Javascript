// var sacha = {
//     nombre: "Sacha",
//     apellido: "Fitness",
//     edad: 28,
// }
// var dario = {
//     nombre: "Dario",
//     apellido: "Vegas",
//     edad: 32,
// }
var john = {
    nombre: "John",
    apellido: "Tremont",
    edad: 32,
    profesion: "meteorologo",
};

function imprimirNombresYEdad() {
    var { nombre, apellido, edad, profesion, } = john;
    console.log(`hola, me llamo ${nombre} ${apellido} tengo ${edad} años y soy ${profesion}`);
}
imprimirNombresYEdad(john)

// function imprimirNombresEnMayusculas(persona) {
//     // var nombre = persona.nombre
//     var { nombre } = persona
//     console.log(persona.nombre.toUpperCase())

// }
// imprimirNombresEnMayusculas(sacha)
// imprimirNombresEnMayusculas(dario)

// esta funcion nos permite agregar +1 al parametro edad cada vez que lo llamemos 

// function cumpleaños(persona) {
//     persona.edad += 1
// }

// esto es para agregar una subclase que conserve el mismo valor de la clase padre pero le sumas +1
function cumpleaños(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}