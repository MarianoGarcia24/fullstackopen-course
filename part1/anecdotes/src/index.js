import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(props.anecdotes.length).fill(0))

  const handleClick = () =>{setSelected(Math.floor(Math.random()*props.anecdotes.length))
  }

  const MostVoted = () => {
    const max = Math.max(...votes)
    const index = votes.indexOf(max)
    return(
      <div>
        <h3> {props.anecdotes[index]} </h3>
        <h3> has {votes[index]} votes  </h3>
      </div>
    )
  }

  const handleVote = () =>{
    const copy = [...votes]
    copy[selected]+=1
    setVotes(copy)
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h3>{props.anecdotes[selected]}</h3>
      <h3>has {votes[selected]} votes</h3>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <MostVoted/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
  document.getElementById('root')
);
