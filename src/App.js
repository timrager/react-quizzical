import React, {useState} from 'react';
import './style.css'
import Quiz from './Quiz'
import StartPage from './StartPage'

// Two screens (start & questions)
// Pull 5 questions from https://opentdb.com/api_config.php
// https://opentdb.com/api.php?amount=5
// Tally correct answers after "Checked answers" is clicked



const App = () => {

  const [start, setStart] = useState(false)

  const startGame = () => {
    setStart(true);
  }

  return (
  <>
      { start ? <Quiz /> : <StartPage startGame={startGame}/> }
  </>
  )
}


export default App;