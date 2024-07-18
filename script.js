// RECAP JS!

// VARIABILI
// una variabile è un contenitore per un valore
// in JS le variabili si definiscono con due inizializzatori, let e const

let x = 10 // variabile globale
const y = 'Stefano'

x = 11
// y = 'Mario' // <-- errore

// TIPI DI VALORE PRIMITIVI IN JS
// string
// number
// boolean
// undefined -> una variabile a cui non è stato assegnato un valore
// null -> rappresenta la totale ASSENZA di un valore

let ciao // il valore di ciao è undefined
console.log(y) // 'Stefano'
console.log(ciao) // undefined

// JS è un linguaggio DEBOLMENTE TIPIZZATO (weakly typed)
let z = 'Stefano'
z = 50
// problema!

// METODI PIÙ COMUNI DELLE STRINGHE
let myName = 'Stefano Casasola'
myName.length // 16
console.log(myName.slice(0, 7)) // 'Stefano'

// TIPI DI DATO COMPLESSI
// array
// un array è una collezione, lista, sequenza di valori contenuti in una singola variabile
const firstArray = ['Alessio', 'Alessandro', 'Carmine', 'Diana', 'Sara']
firstArray[4] // 'Sara'
firstArray.length // 5
firstArray[5] // undefined
// in un array l'ultimo elemento ha SEMPRE indice lunghezza-1

const secondArray = [10, 11, 15, 24, 45, 50, 100]
secondArray.push(150) // aggiunge un elemento in CODA
secondArray.unshift(1) // aggiunge un elemento in TESTA
secondArray.splice(3, 0, 12) // aggiunge il 12 dopo l'11
console.log(secondArray) // [1, 10, 11, 12, 15, 24, 45, 50, 100, 150]

secondArray.pop() // elimina l'ultimo elemento
secondArray.shift() // elimina il primo elemento

// [10, 11, 12, 15, 24, 45, 50, 100]

// oggetti
// in JS gli oggetti sono contenitori di COPPIE CHIAVE:VALORE (le coppie sono anche dette "proprietà")

const firstObject = {
  firstName: 'Stefano', // una coppia chiave:valore
  lastName: 'Casasola',
  skills: ['HTML', 'CSS', 'JS'],
  'years-of-experience': 7,
}

// METODI PER LEGGERE/SCRIVERE proprietà in un oggetto
// 1) DOT NOTATION (notazione punto)
// leggo il cognome
console.log(firstObject.lastName) // 'Casasola'

// aggiungo due proprietà all'oggetto firstObject
firstObject.age = 18 // undefined
firstObject.drivingLicense = true

// cambio il valore di una proprietà esistente
firstObject.firstName = 'Stefania'

// 2) SQUARE BRACKETS NOTATION (parentesi quadre)
console.log(firstObject['firstName']) // 'Stefano'

// serve soprattutto quando il nome della proprietà è scritto con caratteri "strani"
firstObject['years-of-experience'] // 7

const secondObject = {
  color: 'blue',
  weight: 1,
}

let property = 'color'

console.log(secondObject.property) // undefined
console.log(secondObject[property]) // 'blue'
// il secondo caso ci torna effettivamente il valore della proprietà "color" dentro
// secondObject perchè la square-brackets-notation VALUTA il contenuto di property
// in quanto variabile e ne usa il valore come chiave d'accesso per l'oggetto

const thirdObject = {
  firstName: 'Mario', // una coppia chiave:valore
  lastName: 'Bros',
  skills: ['jumping', 'running', 'shooting-fire'],
  'years-of-experience': 30,
  area: {
    kingdom: 'Mushroom Kingdom',
    street: 'Mario Street',
    zipCode: '12345',
    house: {
      colors: ['white', 'red'],
    },
  },
}

thirdObject.skills[2] // 'shoot-fire'
thirdObject.area.house.colors[0] // 'white'
