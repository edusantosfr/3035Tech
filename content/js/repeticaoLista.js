let lista = [1, 2, 3, 4, 5]

// for (let i = 0; i < lista.length; i++) {
//     lista[i] *= 2
// }

console.log(lista)

// lista.forEach((numero) => console.log(numero * 2))

let novaLista = lista.map((numero) => numero * 10)

console.log(novaLista)