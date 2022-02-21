import React from 'react';
import './style.css'

// Two screens (start & questions)
// Pull 5 questions from https://opentdb.com/api_config.php
// Tally correct answers after "Checked answers" is clicked



const App = () => {
  return (
    <div className="container">
      <main>
        <div className="blob-top"></div>
        <h1> Quizzical </h1>
        <h2> How Smart Are You? </h2>
        <div className="button">Start Quiz!</div>
        <div className="blob-btm"></div>
      </main>
    </div>
  )
}


export default App;