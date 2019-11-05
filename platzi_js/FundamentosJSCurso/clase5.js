var sasha = {
    nombre: "sasha",
    apellido: "tremont",
    edad: 28,
}
var dario = {
    nombre: "Dario",
    apellido: "tremont",
    edad: 29,
}



function imprimirNombreEnMayusculas(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}



imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas(sasha)