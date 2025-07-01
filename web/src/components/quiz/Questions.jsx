import React from "react";
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz.jsx';
import Option from "./Options";
import './Questions.css';

const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const OnSelectOption = (option) => {
        dispatch({
            type: 'CHECK_ANSWER',
            payload: {
                answer: currentQuestion.answer, option,
            }
        });
    }
    return (
        <div id="question">
            <p>
                Pergunta {quizState.currentQuestion + 1} a {quizState.questions.length}
            </p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Option 
                    option={option} 
                    key={option} 
                    answer={currentQuestion.answer}
                    selectOption={() => OnSelectOption(option)}
                    />
                ))}
            </div>
        {quizState.answerSelected && (
            <button onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>
                Próxima pergunta
            </button>
        )}
        </div>
    );
}

export default Questions;