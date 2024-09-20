import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import VerificarIdade from './components/VerificarIdade'
import Semana from './components/Semana'

function App() {
  const [page, setPage] = useState(<Home/>)

  return (
    <>

    <nav>
    <button onClick={ () => setPage(<Home/>)}>Home</button>
    <button onClick={ () => setPage(<VerificarIdade/>)}>Verificar Idade</button>
    <button onClick={() => setPage(<Semana/>)}>Dias da Semana</button>
    </nav>

    { page }

    </>
  )
}

export default App
