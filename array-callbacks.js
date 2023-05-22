// metodos mas usados en los arrays con callbacks

// definicion de un array
let frutas = ["Manzana", "Banana", "Cereza", "Fresa"];
console.log(frutas)

// metodo find busca un elemento en el array y devuelve su valor

// con funciones normales
frutas.find(function (elemento) {
    if( elemento == "Banana") {
        return elemento
    }
})

// con funciones flecha
frutas.find(elemento => {
    if(elemento == 'Cereza') {
        return elemento
    }
})

// forma mas corta con funciones flecha
frutas.find(elemento => elemento == 'Fresa')

const elemento = frutas.find(elemento => elemento == 'Fresa')
console.log(elemento)

// metodo filter busca un elemento en el array y devuelve su valor
const arrayFiltrado = frutas.filter(elemento => elemento.length == 6)
console.log(arrayFiltrado)

// metodo map modifica los elementos del array
const arrayMapeado = frutas.map(elemento => elemento.toUpperCase())
console.log(arrayMapeado)

// metodo forEach recorre los elementos del array
frutas.forEach(elemento => {
    console.log(elemento)
})

// metodo some busca un elemento en el array y devuelve true o false
const arraySome = frutas.some(elemento => elemento == 'Banana')
console.log(arraySome)