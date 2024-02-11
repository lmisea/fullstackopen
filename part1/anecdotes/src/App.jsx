import { useState } from 'react'

const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  // Create a new state variable for the votes array and initialize it with an array of zeroes with the same length as the anecdotes array.
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // Set the initial state of the selected variable to a random number between 0 and the length of the anecdotes array.
  const [selected, setSelected] = useState(
    Math.floor(Math.random() * anecdotes.length)
  )

  const nextAnecdote = () => {
    let oldSelected = selected
    let newSelected

    // Generate a new random number for the selected variable and make sure it's different from the old value.
    do {
      newSelected = Math.floor(Math.random() * anecdotes.length)
    } while (newSelected === oldSelected)

    setSelected(newSelected)
  }

  const vote = () => {
    // Create a copy of the votes array and increment the value of the selected anecdote by one.
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
  }

  return (
    <>
      <div>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
      </div>
      <Button onClick={() => vote()} label="vote" />
      <Button onClick={() => nextAnecdote()} label="next anecdote" />
    </>
  )
}

export default App