const API_URL = "https://swapi.co/api/"

const PEOPLE_URL = "people/:id"

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 5)}`

const opts = { crossDomain: true }

const onPeopleResponse = function(persona) {
    console.log(`hola, yo soy ${persona.name}`)
}

// $.get(lukeUrl, opts, onPeopleResponse)

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
    $.get(url, opts, onPeopleResponse)
}
obtenerPersonaje(1)

obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)