var nombre = 'John',
    apellido = 'Perez'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length
var ultimaLetraDelNombre = nombre.charAt(nombre.length - 1)

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)