import './App.css'
import { Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import ProtectedRoutes from './components/protectedRoutes'
import { useState } from 'react'
import PokemonDetails from './components/PokemonDetails'

function App() {

  const [trainer, setTrainer] = useState()
  
  const setName = n => {
    setTrainer(n)
}

  // console.log (trainer)

  return (
    <div className="App">
      
      <Routes>

        <Route path='/' element={<Home setName={setName} />} />

        <Route element={<ProtectedRoutes trainer={trainer} />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={ <PokemonDetails /> } />
        </Route>

      </Routes>

    </div>
  )
}

export default App
