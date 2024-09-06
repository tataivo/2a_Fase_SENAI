import React from 'react'
import { useState } from 'react'
import './Exercicio3.css'

function Exercicio3() {

    const[resultado, setResultado] = useState('')

    function calcular(){

        let valorSalario = Number(prompt('Digite o seu salário: '))
        let valorEmprestimo = Number(prompt('Digite o valor do empréstimo: '))
        let numeroPrestacao = Number(prompt('Digite o número de prestações: '))

        const prestacao = valorEmprestimo / numeroPrestacao
        const limitePrestacao = valorSalario * 0.3

        if(prestacao <= limitePrestacao){

            setResultado('O empréstimo pode ser concedido!')
        }else{

            setResultado('O empréstimo não pode ser concedido!')
        }

        if(valorSalario <= 0){

            setResultado('Erro')
        }
    }

  return (
    <div className='VerificarCredito'>
      <h2> Não tem garçom de cara feia:</h2>

      <div>
        <button onClick={calcular}>Verificar Crédito</button>
      </div>

      {resultado}
    </div>
  )
}

export default Exercicio3
