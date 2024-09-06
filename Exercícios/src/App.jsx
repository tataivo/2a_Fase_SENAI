import { useState } from 'react'
import Media from './components/Media'
import './App.css'
import Exemplo from './components/Exemplo'
import Exercicio1 from './components/Exercicio1'
import Exercicio2 from './components/Exercicio2'
import Exercicio3 from './components/Exercicio3'
import StarUber from './components/StarUber'
import Venda from './components/Venda'
import Notas from './components/Notas'

function App() {
  return (
    <>
    
   <Media></Media>

   <Exemplo></Exemplo>

   <Media></Media>
   <Exercicio1></Exercicio1>
   <Exercicio2></Exercicio2>
   <Exercicio3></Exercicio3>
   <StarUber></StarUber>
   <Venda></Venda>
   <Notas></Notas>
  
    </>
  )
}

export default App
