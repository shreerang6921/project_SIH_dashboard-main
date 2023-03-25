import React from "react";

const QuizResult = (props) => {
    console.log(props.score)
    
    return (
        <div className="score-section">
            <h2> Completed </h2>
            <h4>Total Score {props.score}/25</h4>
            
        </div>
    )
}

export default QuizResult