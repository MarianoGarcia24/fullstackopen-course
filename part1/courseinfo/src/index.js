import React from 'react'
import ReactDOM from 'react-dom'

const Part=(props)=>{
  return(
  <p>
    {props.part.part} = {props.part.exercises}
  </p>
  )
}

const Header = (props) =>{
  return(
  <div>
    <h1>{props.course}</h1>
  </div>)
}

const Content = (props) => {
  return(
  <div>
    <Part part={props.part1}/>
    <Part part={props.part2}/>
    <Part part={props.part3}/>
  </div>
  )
}

const Total = (props) => {
  return(
  <>
    <p>Number of exercises = {props.total}</p>
  </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1Obj = {part:'Fundamentals of React',exercises:10}
  const part2Obj = {part:'Using props to pass data',exercises:7}
  const part3Obj = {part:'State of a component',exercises:14}

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1Obj} part2={part2Obj} part3={part3Obj}/>
      <Total total={part1Obj.exercises + part2Obj.exercises + part3Obj.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
