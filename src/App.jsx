import { useState } from 'react'
import './App.css'
import Briefin from './Components/Briefin';

function App() {

  return (
    <>
      <div className='App'>
        <header>
          <h1>Gestor de Briefings</h1>
        </header>
        <Briefin />
      </div>
    </>
  )
}

export default App;
