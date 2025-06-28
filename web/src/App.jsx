import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/quiz/Welcome.jsx'

function App()  {
  return (
    <div className="App">
      <h1>Quiz sobre a FMP</h1>
      <Welcome />
    </div>
  )
}

export default App
