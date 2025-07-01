import { useContext } from 'react';
import { QuizContext } from '../../context/quiz.jsx';
import React from 'react';


import './EndGame.css';

const EndGame = () =>{
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div id='end-game'>
            <h2>Fim do Quiz</h2>
            <p>Obrigado por jogar!</p>
            <p>Pontuação {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
            <button onClick={() => dispatch({type: 'NEW_GAME'})}>Reiniciar</button>
        </div>
    )
}

export default EndGame;