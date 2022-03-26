import React from 'react'
import { decode } from 'html-entities';

const Question = (props) => {

    // (console.log(props.question))

    console.log(props.incorrect_answers) 

    return (
        <div className="question">
            <p>{decode(props.question)}</p>
            <p>{decode(props.correct_answer)}</p>
            <p>{decode(props.incorrect_answers.sort(() => 0.5 - Math.random() ))}</p>
        </div>
    )
}


export default Question;