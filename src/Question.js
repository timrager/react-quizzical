import React from 'react'
import { decode, decodeURI } from 'html-entities';

const Question = (props) => {

    // (console.log(props.question))

    return (
        <div className="question">
            <p>{decode(props.question)}</p>
            <p>{decode(props.correct_answer)}</p>
            <p>{decode(props.incorrect_answers)}</p>
        </div>
    )
}


export default Question;