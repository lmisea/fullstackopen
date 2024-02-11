/**
 * @file First example of the Functional programming in JavaScript youtube
 * series. This file contains the example of the filter higher order function.
 */

const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]

const isDog = (animal) => animal.species === 'dog'

const dogs = animals.filter(isDog)
const otherAnimals = animals.filter((animal) => !isDog(animal))

// const dogs = animals.filter((animal) => {
//   return animal.species === 'dog'
// })

// const otherAnimals = animals.filter((animal) => {
//   return animal.species !== 'dog'
// })

console.log('Dogs: ', dogs)
console.log('Other Animals: ', otherAnimals)

// const dogs = []
// for (let i = 0; i < animals.length; i++) {
//   if (animals[i].species === 'dog') {
//     dogs.push(animals[i])
