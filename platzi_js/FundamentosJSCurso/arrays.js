var john = {
    nombre: "john",
    apellido: "tremont",
    altura: 1.67,
}
var myrna = {
    nombre: "myrna",
    apellido: "alvarado",
    altura: 1.59,
}

var angie = {
    nombre: "angie",
    apellido: "alvarado",
    altura: 1.60,
}

var manolo = {
    nombre: "manolo",
    apellido: "ramos",
    altura: 1.68,
}

var doris = {
    nombre: "doris",
    apellido: "lagambino",
    altura: 1.40,
}

var personas = [john, angie, manolo, myrna, doris]

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}