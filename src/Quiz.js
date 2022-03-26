import React, {useState, useEffect} from 'react';
import './style.css'
import Question from './Question'


// category
// correct_answer
// difficulty
// incorrect_answers[]
// question
// type


const Quiz = (props) => {

    const [questions, setQuestions] = useState([])
    const [updatedQuestions, setUpdatedQuestions] = useState([])

    useEffect( () => {
        // fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        //     .then(response => response.json())
        //     .then(data => setQuestions(data.results))

        const getQuizData = async () => {
            const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await response.json()
            Object.assign(...data.results, { all_answers: [] })
            // data.results.all_answers.push(data.results.correct_answer, data.results.incorrect_answers)
            setQuestions(data.results)       
        }
        getQuizData();

    }, [])

    console.log(questions)

    const questionElement = questions.map(item => (

        <Question 
            correct_answer={item.correct_answer}
            incorrect_answers={item.incorrect_answers}
            all_answers={item.all_answers}
            question={item.question}
        />
    ))

    return (
        <div className="container">
            <main>
                <div className="blob-top"></div>
                    <div>{questionElement}</div>
                <div className="blob-btm"></div>
            </main>
        </div>
    )
}
export default Quiz;