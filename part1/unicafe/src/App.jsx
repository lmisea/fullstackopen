import { useState } from 'react'

const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
)

const DisplayAverage = ({ average, all }) => {
  if (all === 0) {
    return <p>average {average}</p>
  }
  return <p>average {average / all}</p>
}

const DisplayPositive = ({ good, all }) => {
  if (all === 0) {
    return <p>positive {good} %</p>
  }
  return <p>positive {(good / all) * 100} %</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average - 1)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} label="good" />
      <Button onClick={handleNeutralClick} label="neutral" />
      <Button onClick={handleBadClick} label="bad" />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <DisplayAverage average={average} all={all} />
      <DisplayPositive good={good} all={all} />
    </>
  )
}

export default App
