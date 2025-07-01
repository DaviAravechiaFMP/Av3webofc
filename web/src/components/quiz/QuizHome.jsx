import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import React from 'react'
import './QuizHome.css'
const QuizHome = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div id="welcome">
            <h2>Seja bem vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button onClick = {() => dispatch({type: 'CHANGE_STATE'})}>Iniciar</button>
        </div>
    )
}

export default QuizHome