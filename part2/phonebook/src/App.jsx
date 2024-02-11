import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (isPersonInPhonebook(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const isPersonInPhonebook = (name) => {
    return persons.some((person) => person.name === name)
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handlePersonChange} value={newName} />
        </div>
        <div>
          <Button onClick={addPerson} label="add" />
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  )
}

const Person = ({ person }) => {
  return <p>{person.name}</p>
}

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>
}

export default App
