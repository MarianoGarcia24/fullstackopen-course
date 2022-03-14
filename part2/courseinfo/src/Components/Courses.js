import React from "react"
import Content from './Content'

  const Header = ({course}) =>{
    return(
    <div>
      <h2>{course.name}</h2>
    </div>)
  }
  

  const Total = ({parts}) => {
    const total = parts.reduce((previous,current)=>(previous+current.exercises),0)
    return(
    <>
      <b> Number of exercises = {total} </b>
    </>
    )
  }

  const Course = ({course}) =>{
    return(
      <>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </>
    )
  }
  
  const Courses = ({courses}) => {
    return(
      <div>
        {courses.map(course => 
              <Course key={course.id} course={course}/>
        )}
      </div>
    )
  }

export default Courses;