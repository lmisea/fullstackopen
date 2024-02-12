import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [personsToShow, setPersonsToShow] = useState(persons)

  const addPerson = (event) => {
    event.preventDefault()
    if (isPersonInPhonebook(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    setPersons(persons.concat(personObject))
    setPersonsToShow(persons.concat(personObject))
    setNewFilter('')
    setNewName('')
    setNewNumber('')
  }

  const isPersonInPhonebook = (name) => {
    return persons.some(
      (person) => person.name.toLowerCase() === name.toLowerCase()
    )
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = async (event) => {
    setNewFilter(event.target.value)
    const updatedFilter = event.target.value

    if (updatedFilter.length === 0) {
      setPersonsToShow(persons)
      return
    }

    setPersonsToShow(
      persons.filter((person) =>
        person.name.toLowerCase().startsWith(updatedFilter.toLowerCase())
      )
    )
  }

  const handleClearButton = (event) => {
    event.preventDefault()
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} newFilter={newFilter} />
      <h2>add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleClearButton={handleClearButton}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
