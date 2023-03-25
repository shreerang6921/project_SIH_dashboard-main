import React from 'react'
import "./Quiz.css";
import questions from "./QuizData";
import {useState} from 'react'
import QuizResult from './QuizResult';
const Quiz = () => {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0)
    const [CorrectAns,setCorrectAns]=useState(0)
    const [showResult,setShowResult]=useState(0)


    const handleAnswerOption=(isCorrect)=>{
        if(isCorrect){
                setScore(score+5)
                setCorrectAns(CorrectAns+1)
        }
    }
    const handleNextOption=()=>{
        const nextQuestion=currentQuestion+1;
        if(nextQuestion<questions.length){
        setCurrentQuestion(nextQuestion);
            
        }else{
            setShowResult(true)
        }
    }
    return (
        <>
        <div className='app'>
            
            {showResult?(<QuizResult score={score} CorrectAns={CorrectAns}/>):(

<>
<div className='question-section'>
    <h5>Score:{score}</h5>
    <div className='question-count'>
    <span>question {currentQuestion+1} of {questions.length}</span>
    </div>
    <div className='question-text'>
        {questions[currentQuestion].questionText}
    </div>
</div>
<div className='answer-section'>
    {questions[currentQuestion].answerOptions.map((ans,i)=>{
        return <button key={i}onClick={()=>handleAnswerOption(ans.isCorrect)}>
            {ans.answerText}</button>
    })}
    
    <div className='actions'>
    <button onClick={handleNextOption}>Next</button>
</div>
</div>
</>

            )}
            

        </div>
        </>
    )
}

export default Quiz