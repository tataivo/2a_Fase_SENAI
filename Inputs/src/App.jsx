import { useState } from 'react'
import './App.css'
import Domingo from './components/Domingo'
import MaiorIdade from './components/MaiorIdade'
import MenorIdade from './components/MenorIdade'
import Quarta from './components/Quarta'
import Quinta from './components/Quinta'
import Sabado from './components/Sabado'
import Sexta from './components/Sexta'
import Terça from './components/Terça'
import Segunda from './components/Segunda'

function App() {
  const[inputIdade, setInputIdade] = useState()
  const[maior, setMaior] = useState(false)
  const[menor, setMenor] = useState(false)

  const[inputSemana, setInputSemana] = useState()
  const[domingo, setDomingo] = useState(false)
  const[segunda, setSegunda] = useState(false)
  const[terça, setTerça] = useState(false)
  const[quarta, setQuarta] = useState(false)
  const[quinta, setQuinta] = useState(false)
  const[sexta, setSexta] = useState(false)
  const[sabado, setSabado] = useState(false)

  function processarDia(){

    switch(inputSemana){

      case 1:
        setDomingo(true)
        setSegunda(false)
        setTerça(false)
        setQuarta(false)
        setQuinta(false)
        setSexta(false)
        setSabado(false)
        break

      case 2:
        setDomingo(false)
        setSegunda(true)
        setTerça(false)
        setQuarta(false)
        setQuinta(false)
        setSexta(false)
        setSabado(false)
        break

      case 3:
        setDomingo(false)
        setSegunda(false)
        setTerça(true)
        setQuarta(false)
        setQuinta(false)
        setSexta(false)
        setSabado(false)
        break

      case 4:
        setDomingo(false)
        setSegunda(false)
        setTerça(false)
        setQuarta(true)
        setQuinta(false)
        setSexta(false)
        setSabado(false)
        break

      case 5:
        setDomingo(false)
        setSegunda(false)
        setTerça(false)
        setQuarta(false)
        setQuinta(true)
        setSexta(false)
        setSabado(false)
        break

      case 6:
        setDomingo(false)
        setSegunda(false)
        setTerça(false)
        setQuarta(false)
        setQuinta(false)
        setSexta(true)
        setSabado(false)
        break

      case 7:
        setDomingo(false)
        setSegunda(false)
        setTerça(false)
        setQuarta(false)
        setQuinta(false)
        setSexta(false)
        setSabado(true)
        break


    }
  }

  function processarIdade(){

    if(inputIdade >= 18){

      // alert('Você é maior de idade!')
      setMaior(true)
      setMenor(false)
    }else{

      // alert('Você não é maior de idade.')
      setMenor(true)
      setMaior(false)
    }
  }

  return (
    <>
        <h1>Inputs</h1>

    <div className='Container'>
      <h2>Verificador de Idade</h2>
    Idade: <input type="number"
    value={inputIdade}
    onChange={(event) => {setInputIdade(event.target.value)}} 
    />
    <div>
    <button onClick={processarIdade}>Processar Idade</button>
    </div>

    {/* {inputIdade} */}
    {maior && <MaiorIdade></MaiorIdade>}
    {menor && <MenorIdade></MenorIdade>}

    </div>

    <div className='Container'>
      <h2>Dia da Semana</h2>
      Insira um número: <input type="number" min={1} max={7} 
      value={inputSemana}
      onChange={(event) => {setInputSemana(event.target.value)}}
      />
    <div>
      <button onClick={processarDia}>Verificar Dia da Semana</button>
    </div>

    {domingo && <Domingo></Domingo>}
    {segunda && <Segunda></Segunda>}
    {terça && <Terça></Terça>}
    {quarta && <Quarta></Quarta>}
    {quinta && <Quinta></Quinta>}
    {sexta && <Sexta></Sexta>}
    {sabado && <Sabado></Sabado>}
    </div>
    </>
  )
}

export default App
