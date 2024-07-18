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

// ... (SPREAD OPERATOR)

const obj1 = {
  color: 'blue',
  weight: 50,
}

const obj2 = {
  ...obj1, // vi siete appena portati dentro obj2 TUTTE LE PROPRIETÀ di obj1
  // potete poi aggiungere proprietà aggiuntive
  shape: 'square',
}

console.log('obj2', obj2)

const arr1 = ['ciao', 'hello', 'hola']
const arr2 = [...arr1, 'hi']
console.log(arr2.length) // 4

// senza lo spread operator l'array verrebbe portato dentro interamente
const arr3 = [arr1]
console.log(arr3) // [['ciao', 'hello', 'hola']]

let x1 = 10
let x2 = x1 // 10
x2 = 50
// x1 -> 10

const obj10 = {
  x: 10,
}

const obj11 = obj10 // -> QUESTA NON È UNA VERA COPIA, se parliamo di oggetti (o di array)

obj11.x = 50

console.log(obj10.x) // ??? 50

// VERA COPIA DI OBJ10
const obj12 = {
  ...obj10,
}

obj12.x = 50
// non sto alterando il valore di obj10

// IF / ELSE
// con il costrutto if/else andiamo a condizionare il flusso del nostro algoritmo
// in base ad una o più condizioni

const cartTotal = 40

const shippingCost = 5
// ma gratuite sopra i 50

let total // ???

if (cartTotal >= 50) {
  total = cartTotal // l'utente non paga le spedizioni
} else {
  total = cartTotal + shippingCost // l'utente non ha speso abbastanza, paga le spedizioni
}

// TERNARY OPERATOR
total = cartTotal >= 50 ? cartTotal : cartTotal + shippingCost

total = cartTotal || 0 // OR, assegna cartTotal a total a patto che non sia un valore falsy

// valori truthy e falsy

if (-10) {
  // la condizione è truthy!
  console.log('ciao!')
}

// FUNZIONI
// le funzioni in JS sono dei blocchi di codice riutilizzabili
// le funzioni in JS vanno PRIMA DICHIARATE e POI UTILIZZATE (invocate)

console.log('THIS', this)

const myFunction = function () {
  console.log('BAU!')
}

myFunction()
myFunction()
myFunction()

const arrowFunction = () => {
  // una funzione freccia è un modo più minimale e moderno di scrivere le funzioni in JS
  // una funzione freccia NON possiede dei proprio bindings per le parole "this", "super", e "arguments"
  console.log('funzione freccia')
}

// un'altra caratteristica delle funzioni freccia è che se il loro unico scopo
// è ritornare un valore, lo possono fare senza bisogno di scrivere "return" e senza
// usare le graffe

const return5 = () => 5
// dovete o avere le graffe più il return, o niente graffe e niente return

// VALORI DI RITORNO IN UNA FUNZIONE
// l'invocazione di una funzione che alla fine della sua esecuzione RITORNA un valore
// equivale al valore di ritorno stesso

const sumTwoNumbers = function () {
  const sum = 10 + 20 // 30
  return sum
}

console.log(sumTwoNumbers() + 20) // 50

// PARAMETRI DI UNA FUNZIONE
// una funzione può accettare dei parametri dall'esterno in modo da PERSONALIZZARE
// il suo flusso di operazioni

const sumAnyTwoNumbers = function (num1, num2) {
  const sum = num1 + num2
  return sum
}

sumAnyTwoNumbers(5, 8) // equivale al numero 13
sumAnyTwoNumbers(15, 28) // equivale al numero 43

// CICLI
// un ciclo è un'istruzione che RIPETE l'esecuzione di una determinata porzione di
// codice un numero definito/non definito di volte

// il ciclo più famoso per effettuare un'operazione un numero NON predeterminato di
// volte è il WHILE

let number = 0

while (number < 10) {
  console.log(number)
  number = number + Math.random()
}

// il ciclo più famoso per effettuare un'operazione un numero predeterminato di
// volte è il FOR

for (let i = 0; i < 10; i++) {
  // quante volte entreremo qui dentro? 10 volte
  // in ognuna delle 10 volte i assumerà un valore diverso, da 0 (iniziale) a 9 (finale)
  console.log('miao!', i)
}

for (let i = 0; i < arr1.length; i++) {
  // quante volte entriamo qui dentro?
  // la prima volta perchè la i è 0
  // la seconda volta perchè la i è 1
  // la terza volta perchè la i è 2
  console.log(arr1[i])
}

// esistono dei metodi degli array che CICLANO gli elementi in esso contenuti

// FOREACH CICLA UN ARRAY
arr1.forEach((currentElement, i) => {
  console.log('CICLO ARR1', currentElement, i)
})

// MAP TRASFORMA UN ARRAY
const newArray = arr1.map((currentElement, i) => {
  return currentElement.toLocaleUpperCase()
})
console.log(newArray)

const arrOfWords = ['HELLO', 'hi', 'ciao', 'hotel', 'addio', 'ho fame', 'HAAAA']

// FILTER RITORNA UN ARRAY CON VOLENDO MENO ELEMENTI DELL'ORIGINALE
const wordsWithH = arrOfWords.filter((currentElement, i) => {
  return currentElement.toLocaleLowerCase().charAt(0) === 'h'
})

console.log(wordsWithH) // 'hello', 'hola'

// ==
// un operatore che controlla il VALORE ma non il TIPO
// '3' == 3 -> TRUE
// ===
// un operatore che controlla SIA IL VALORE SIA IL TIPO
// '3' === 3 -> FALSE

// REDUCE trasforma un array in un numero

const arrayOfPrices = [40, 5, 2, 89]
const totalCost = arrayOfPrices.reduce((acc, currentElement) => {
  return acc + currentElement
}, 0)

console.log(totalCost)
