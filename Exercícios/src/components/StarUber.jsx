import React from 'react'
import { useState} from 'react'
import './UberStar.css'

function StarUber() {

    const[resultado, setResultado] = useState('')

    function calcular(){

        let distanciaViagem = Number(prompt('Digite a distância (km): '))
        let velocidadeLuz = 300000, duracaoViagem, medidaTempo

        duracaoViagem = distanciaViagem / velocidadeLuz
        
        switch(true){

            case duracaoViagem >= 60 && duracaoViagem < 60*60:
                duracaoViagem = duracaoViagem / 60
                medidaTempo = 'min'
                break

            case duracaoViagem >= 3600 && duracaoViagem < 86400:
                duracaoViagem = duracaoViagem / (60*60)
                medidaTempo = 'hora(s)'
                break

            case duracaoViagem >= 86400 && duracaoViagem <86400*31:
                duracaoViagem = duracaoViagem / (60*60*60)
                medidaTempo = 'dia(s)'
                break

            case duracaoViagem >= 86400*31 && duracaoViagem < 86400*31*12:
                duracaoViagem = duracaoViagem / (60*60*60*31)
                medidaTempo = 'mes(es)'
                break
            
            case duracaoViagem >= 86400*31*12:
                duracaoViagem = duracaoViagem / (60*60*60*31*12)
                medidaTempo = 'ano(s)'
                break

            default:
                medidaTempo = 's'
                break
                
        }

        setResultado(`A duração da viagem é de ${duracaoViagem} ${medidaTempo}`)

    }

  return (
    <div className='Container'>
      <h2>StarUber:</h2>

      <div>
        <button onClick={calcular}>Calcular Duração</button>
      </div>

      {resultado}
    </div>
  )
}

export default StarUber
