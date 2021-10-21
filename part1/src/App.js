import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state

  const [clicks, setClicks] = useState ({
    good: 0, bad: 0, neutral: 0
  })

  const handleGood = () => {
    setClicks({...clicks, good: clicks.good + 1})
  }

  const handleNeutral = () => {
    setClicks({...clicks, neutral: clicks.neutral + 1})
  }

  const handleBad = () => {
    setClicks({...clicks, bad: clicks.bad + 1})
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        {good}
        <button onClick={() => handleGood()}>good</button>,
        {neutral}
        <button onClick={() => handleNeutral()}>neutral</button>,
        {bad}
        <button onClick={() => handleBad()}>bad</button>

      </div>
      <div>
        <h2>Statistics</h2>
        <p>good</p>
        <p>neutral</p>
        <p>bad</p>
      </div>
    </div>
  )
}

export default App