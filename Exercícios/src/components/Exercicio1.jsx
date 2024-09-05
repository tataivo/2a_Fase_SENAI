import React from 'react'
import { useState } from 'react'
import './Exercicio1.css'

function Exercicio1() {

    const[resultado, setResultado] = useState('')

    function calcular(){

        let numeroDigitado = Number(prompt('Digite um número: '))
        if(numeroDigitado < 0){

            setResultado('O número é negativo!')
        }else if(numeroDigitado == 0){

            setResultado('O número é nulo!')
        }else{

            setResultado('O número é positivo!')
        }
    }

  return (
    <div className='VerificarNumero'>

        <h2>Copo meio cheio:</h2>

        <div className='Botao'>
        <button onClick={calcular}>Processar Número</button>
        </div>

        {resultado}
      
    </div>
  )
}

export default Exercicio1
