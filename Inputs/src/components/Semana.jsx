import React from 'react'
import {useState} from 'react'
import './Estilizacao.css'

function Semana() {
    const [inputSemana, setInputSemana] = useState()

    function processarDia(){

        switch(inputSemana){

            case 1:
                
        }
    }

  return (
    <div>
      <h1>Dias da Semana</h1>
      <div>
        <label htmlFor="">Digite um número de 1 a 7:</label>
      </div>
      <input type="text"
      value={inputSemana}
      onChange={(event) => {setInputSemana(event.target.value)}}/>
      <div>
        <button onClick={processarDia}>Processar dia</button>
      </div>
    </div>
  )
}

export default Semana
