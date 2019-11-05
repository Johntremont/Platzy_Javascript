var john = {
    nombre: "john",
    apellido: "tremont",
    edad: 32,
    peso: 75,
}




console.log(`al incio del año ${john.nombre} pesa ${john.peso}kg `)

const DIAS_DEL_AÑO = 365
const PESO_CONSTA = 0.2

// function subirDePeso (persona) {      // esto es lo mismo que la de abajo
//   return persona.peso +=200
// }
const subirDePeso = persona => persona.peso += PESO_CONSTA
const adelgazar = persona => persona.peso <= PESO_CONSTA

for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        subirDePeso(john)

    } else if (random < 0.5) {
        adelgazar(john)
    }
}


console.log(`al final del año ${john.nombre} pesa ${john.peso.toFixed(1)}kg`)