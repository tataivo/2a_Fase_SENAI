import React from 'react'
import { useState } from 'react'
import './UberStar.css'

function Notas() {

    const [resultado, setResultado] = useState('')

    function calcular(){

        let notaUm = Number(prompt('Digite a primeira nota: '))
        let notaDois = Number(prompt('Digite a segunda nota: '))
        let media

        media = notaUm + notaDois / 2

        switch(true){

            case media >= 9 && media <= 10:
                setResultado(`Notas: ${notaUm} e ${notaDois}\nMédia: ${media}\nConceito atingido: A`)
                break

            case media >= 7.5 && media <9:
                setResultado(`Notas: ${notaUm} e ${notaDois}\nMédia: ${media}\nConceito atingido: B`)
                break

            case media >= 6 && media <7.5:
                setResultado(`Notas: ${notaUm} e ${notaDois}\nMédia: ${media}\nConceito atingido: C`)
                break

            case media >= 4 && media < 6:
                setResultado(`Notas: ${notaUm} e ${notaDois}\nMédia: ${media}\nConceito atingido: D`)
                break

            case media >= 0 && media < 4:
                setResultado(`Notas: ${notaUm} e ${notaDois}\nMédia: ${media}\nConceito atingido: E`)
                break
        


        }

    }

  return (
    <div className='Container'>
      <h2>Média de Notas:</h2>

      <div>
        <button onClick={calcular}>Calcular Média</button>
      </div>

      {resultado}
    </div>
  )
}

export default Notas
