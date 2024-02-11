import { useState } from 'react'

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

  const handlePersonChange = (event) => {
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

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{' '}
        <input onChange={handleFilterChange} value={newFilter} />
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input onChange={handlePersonChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <Button onClick={addPerson} label="add" />
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  )
}

const Person = ({ person }) => {
  return (
    <p>
      {person.name} {person.number}
    </p>
  )
}

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>
}

export default App
