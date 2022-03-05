import React from 'react';
import './style.css'

const StartPage = (props) => {

    return (
        <div className="container">
            <main>
            <div className="blob-top"></div>
            <h1> Quizzical </h1>
            <h2> How Smart Are You? </h2>
                <div className="button" onClick={ () => props.startGame(true) }>Start Quiz!</div>
            <div className="blob-btm"></div>
            </main>
        </div>
    )
}


export default StartPage;