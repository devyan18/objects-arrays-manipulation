// objects

// definicion de un objeto

const user = {
    "nombre completo" : "Juan Perez",
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    activo: true
}

console.log(user)

console.log(user.nombre) // ✅ accede a una propiedad del objeto

console.log(user["nombre completo"]) // ✅ accede a una propiedad del objeto

console.log(user.edad) // ✅ accede a una propiedad del objeto

// se pueden modificar sus valores

user.nombre = "Pedro"

console.log(user.nombre)

// metodos mas usados en los objetos

console.log(Object.keys(user)) // ✅ devuelve un array con las propiedades del objeto

console.log(Object.values(user)) // ✅ devuelve un array con los valores de las propiedades del objeto

console.log(Object.entries(user)) // ✅ devuelve un array con las propiedades y valores del objeto

console.log(Object.assign(user, {edad: 31})) // ✅ modifica una propiedad del objeto

console.log(user)