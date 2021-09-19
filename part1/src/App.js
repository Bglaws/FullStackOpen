import React from 'react'

const part1 = () => {
  const exercises1 = 10
  return (
    <div>
      <p>Fundamentals of React</p>
      <p>Number of exercises {exercises1}</p>
    </div>
  )
}
const part2 = () => {
  const exercises2 = 7
  return (
    <div>
      <p>Using props to pass data</p>
      <p>Number of exercises {exercises2}</p>
    </div>
  )
}
const part3 = () => {
  const exercises3 = 14
  return (
    <div>
      <p>State of a component</p>
      <p>Number of exercises {exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <h1>{course}</h1>
      <part1 />
      <part2 />
      <part3 />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App