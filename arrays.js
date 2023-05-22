// arrays

// metodos mas usados en los arrays

// definicion de un array

let frutas = ["Manzana", "Banana", "Cereza", "Fresa"];

console.log(frutas)

console.log(frutas[2]) // ✅ accede a un elemento del array

console.log(frutas.length) // ✅ devuelve la cantidad de elementos del array

console.log(frutas[5]) // ❌ accede a un elemento que no existe en el array

console.log('reverse')
// frutas.slice().reverse(); // ✅ invierte el orden de los elementos del array
console.log(frutas.slice().reverse());

frutas.push("Uvas"); // ✅ agrega un elemento al final del array
console.log(frutas);

frutas.pop(); // ❌ elimina el ultimo elemento del array
console.log(frutas);

frutas.unshift("Uvas"); // ✅ agrega un elemento al inicio del array
console.log(frutas);

frutas.shift(); // ❌ elimina el primer elemento del array
console.log(frutas);

let posicion = frutas.indexOf("Banana"); // busca un elemento en el array y devuelve su posicion
console.log(posicion);

console.log(frutas.find(elemento => elemento == "Banana")); // busca un elemento en el array y devuelve su valor
