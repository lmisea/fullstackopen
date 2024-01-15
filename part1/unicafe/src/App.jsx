import { useState } from 'react'

const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} label="good" />
      <Button onClick={() => setNeutral(neutral + 1)} label="neutral" />
      <Button onClick={() => setBad(bad + 1)} label="bad" />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}

export default App
