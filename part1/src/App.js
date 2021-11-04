import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state

  const [clicks, setClicks] = useState ({
    good: 0, bad: 0, neutral: 0, total: 0, avg: 0
  })

  const handleGood = () => {
    setClicks({
      ...clicks, 
      good: clicks.good + 1,
      total: clicks.total + 1,
      avg: clicks.avg = 
    })
    
  }

  const handleNeutral = () => {
    setClicks({...clicks, neutral: clicks.neutral + 1, total: clicks.total + 1})
  }

  const handleBad = () => {
    setClicks({...clicks, bad: clicks.bad + 1, total: clicks.total + 1})
  }

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        
        <button onClick={() => handleGood()}> good </button>
        
        <button onClick={() => handleNeutral()}> neutral </button>
        
        <button onClick={() => handleBad()}> bad </button>

      </div>
      <div>
        <h2>Statistics</h2>
        <p>good: {clicks.good}</p>
        <p>neutral: {clicks.neutral}</p>
        <p>bad: {clicks.bad}</p>
        <p>total: {clicks.total}</p>
        <p>avg: {clicks.avg}</p>
      </div>
    </div>
  )
}

export default App