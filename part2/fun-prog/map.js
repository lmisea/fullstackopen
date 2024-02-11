/**
 * @file Second example of the Functional programming in JavaScript youtube
 * video series. This file contains the example of the map higher order function.
 */

const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]

const names = animals.map((animal) => animal.name)

// const names = animals.map((animal) => {
//   return animal.name
// })

// const names = []
// for (let i = 0; i < animals.length; i++) {
//   names.push(animals[i].name)
// }

console.log('Names: ', names)
