import React from 'react'
import ReactDOM from 'react-dom'

const Part=(props)=>{
  return(
  <p>
    {props.parts.name} = {props.parts.exercises}
  </p>
  )
}

const Header = (props) =>{
  return(
  <div>
    <h1>{props.course.name}</h1>
  </div>)
}

const Content = (props) => {
  return(
  <div>
    <Part parts={props.parts[0]}/>
    <Part parts={props.parts[1]}/>
    <Part parts={props.parts[2]}/>
  </div>
  )
}

const Total = (props) => {
  var total = 0
  for (var i=0;i<props.parts.length;i++)
  {
    total = total + props.parts[i].exercises;
  }
  return(
  <>
    <p>Number of exercises = {total} </p>
  </>
  )
}

const App = () => {
  const course = 
  {
  name:'Half Stack application development',
  parts:[
    {
      name:'Fundamentals of React',
      exercises:10
    },
    { 
      name:'Using props to pass data',
      exercises:7
    },
    {
      name:'State of a component',
      exercises:14
    } 
  ]
}
  

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
