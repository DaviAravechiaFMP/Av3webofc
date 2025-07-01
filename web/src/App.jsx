// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { QuizContext } from './context/quiz.jsx'
// import { useContext } from 'react'
// import Question from './components/quiz/Questions.jsx'
// import './App.css'
// import QuizHome from './components/quiz/QuizHome'
// import { QuizProvider } from './context/quiz.jsx'

// function App()  {
//   const [quizState, dispatch] = useContext(QuizContext);

//   return (
//     <div className="App">
//       <h1>Bem vindo</h1>
//       {quizState.gameStage === 'Start' && <QuizHome />}
//       {quizState.gameStage === 'Playing' && <Question />}
        
//     </div>
//   )
// }

// export default App

import React, { useEffect } from 'react'
import { use, useContext } from 'react'
import { QuizContext } from './context/quiz.jsx'
import './App.css'
import { QuizProvider } from './context/quiz.jsx'

import EndGame from './components/quiz/EndGame.jsx'
import QuizHome from './components/quiz/QuizHome'
import Question from './components/quiz/Questions.jsx'

function QuizContent() {
  const [quizState, dispatch] = useContext(QuizContext)
  
  useEffect(() => {
    //embaralhar perguntas
    dispatch({type: 'REORDER_QUESTIONS'})
  }, [])
  return (
    <>
      <h1>Bem vindo</h1>
      {quizState.gameStage === 'Start' && <QuizHome />}
      {quizState.gameStage === 'Playing' && <Question />}
      {quizState.gameStage === 'End' && <EndGame />} 
      {/* {quizState.gameStage === 'NEW_GAME' && <EndGame />}  */}
    </>
  )
}

function App() {

  return (
    <div className="App">
      <QuizProvider>
        <QuizContent />
      </QuizProvider>
    </div>
  )
}

export default App
