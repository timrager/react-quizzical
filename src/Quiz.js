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

    useEffect( () => {

        const getQuizData = async () => {
            const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await response.json()
            const newData = await data.results.map( item => {
                const newItem = Object.assign({ ...item, all_answers: [] })
                return newItem;
            })
            // console.log(newData)
            const mergedData = await newData.map(item => {
                item.all_answers.push(...item.incorrect_answers, item.correct_answer)
                return item;
            })
            // console.log(mergedData)
            setQuestions(mergedData)
        }

        getQuizData();

    }, [])

    // console.log(questions)

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