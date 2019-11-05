// Promesas Encadenadas

/*
A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro
de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada 
sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea
mucho más legible y mantenible.
*/
// Volviendo al ejemplo anterior

//De esta manera se obtiene datos de la api SWAPI.
const API_URL = "https://swapi.co/api/"

const PEOPLE_URL = "people/:id"

const opts = { crossDomain: true }


function obtenerPersonaje(id) {
    // Ya no va a recibir un callback, si no que retornara una promesa.
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
        $
            .get(url, opts, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`sucedio un error al obtener el personaje ${id}`)
}
// Aca llamamos a la funcion que es una promesa
obtenerPersonaje(1)
    .then(personaje1 => {
        console.log(`el personaje 1 es ${personaje1.name}`)
            // Para obtener la siguiente promesa "seria el anidado de los callbacks"
        return obtenerPersonaje(2)
    })
    .then(personaje2 => {
        console.log(`el personaje 2 es ${personaje2.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje3 => {
        console.log(`el personaje 3 es ${personaje3.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje4 => {
        console.log(`el personaje 4 es ${personaje4.name}`)
        return obtenerPersonaje(5)
    })
    // En el caso de errores
    .catch(onError)
    //Le pasamos el nombre de la funcion que se va a ejecutar.```

// obtenerPersonaje(2, function(personaje) {
//     console.log(`hola, yo soy${personaje.name}`)

//     obtenerPersonaje(3, function(personaje) {
//         console.log(`hola, yo soy${personaje.name}`)

//         obtenerPersonaje(4, function(personaje) {
//             console.log(`hola, yo soy${personaje.name}`)
//         })
//     })
// })