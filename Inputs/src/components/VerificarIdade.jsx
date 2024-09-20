import React from 'react'
import { useState } from 'react'
import './Estilizacao.css'

function VerificarIdade() {

  const [inputIdade, setInputIdade] = useState()
  const [maior, setMaior] = useState(false)
  const [menor, setMenor] = useState(false)


  function processarIdade(){

    if(inputIdade >= 18){
      alert('Você é maior de idade!')
      setMaior(true)
      setMenor(false)
    }else{
  
      alert('Você é de menor.')
      setMenor(true)
      setMaior(false)
    }
  
  }

  return (
    <div className='Container'>
      <h1>Verificador de idade</h1>
      <div>
      <label htmlFor="">Idade:</label> 
      </div>
      <input type="number" 
      value={inputIdade}
      onChange={(event) => {setInputIdade(event.target.value)}}/>
      <div>
      <button onClick={processarIdade}>Processar Idade</button>
      </div>
    </div>
  )
}

export default VerificarIdade
