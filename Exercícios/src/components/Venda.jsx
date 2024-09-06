import React from 'react'
import {useState} from 'react'
import './Venda.css'

function Venda() {

    const [resultado, setResultado] = useState('')

    function calcular(){

        let valorProduto = Number(prompt('Digite o valor do produto:'))
        let valorVenda

        if(valorProduto < 20){
            
            valorVenda = (valorProduto *0.45) + valorProduto
            valorVenda.toFixed
            setResultado('R$' + valorVenda.toFixed(2))

        }else{

            valorVenda = (valorProduto * 0.30) + valorProduto
            valorVenda.toFixed
            setResultado('R$' + valorVenda.toFixed(2))

        }

    }

  return (
    <div className='Container'>
      <h2>Venda:</h2>

      <div>
        <button onClick={calcular}>Calcular Venda</button>
      </div>

      {resultado}
    </div>
  )
}

export default Venda
