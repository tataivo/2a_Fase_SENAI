import React from 'react'
import { useState } from 'react'
import './Exercicio2.css'

function Exercicio2() {

    const[resultado, setResultado] = useState('')

    function calcular(){

        let numeroDigitado = Number(prompt('Digite um número: '))
        if(numeroDigitado % 2 == 0 && numeroDigitado > 0){

            setResultado('O número é par e positivo!')
        }else{

            setResultado('O número não é par e postivo ao mesmo tempo!')
        }
    }
  return (
    <div className='VerificarNumero'>
      <h2>
        Dois copos meio cheios:
      </h2>

        <div>
            <button onClick={calcular}>Verificar Número</button>
        </div>

        {resultado}
    </div>
  )
}

export default Exercicio2
