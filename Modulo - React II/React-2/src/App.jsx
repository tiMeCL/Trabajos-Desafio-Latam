import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registro from './components/Registro'
import Card from 'react-bootstrap/Card';


function App() {
  
  return (
    <>
      
      <h2>Crea una cuenta</h2>
      
      <div className="Card">
      
      <Registro/>
      
      </div>
      
      
    </>
  )
}

export default App
