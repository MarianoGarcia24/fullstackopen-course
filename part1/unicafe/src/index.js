import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const Button = (props) => {
  return (
      <button onClick = {props.handleClick}>{props.title}</button>
  )
}

const Stat = ({name,counter}) => {
    return (<tr>
              <td>{name}</td>
              <td>{counter}</td>
            </tr>)
}

const Stats=({good,neutral,bad})=>{
  const total = bad+good+neutral
  if (good!=0 || neutral != 0 || bad!=0)
  return(
    <div>
      <table>
        <tbody>
          <Stat name='good' counter={good}/>  
          <Stat name='neutral' counter={neutral}/>
          <Stat name='bad' counter={bad}/>
          <Stat name='total' counter={total}/>
          <Stat name='average' counter={(good-bad)/total}/>
          <Stat name='positive' counter={good*100/total +'%'}/>        
        </tbody>
      </table>

    </div>
  )
  else
  return(
    <h3>No Feedback given</h3>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {setGood(good+1)}
  const handleNeutralClick = () => {setNeutral(neutral + 1)}
  const handleBadClick = () => {setBad(bad + 1)}

  
  return (
    <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleGoodClick} title='Good'/>
        <Button handleClick={handleNeutralClick} title='Neutral'/>
        <Button handleClick={handleBadClick} title='Bad'/>
        <h1>statistics</h1>
        <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
