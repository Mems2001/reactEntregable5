import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import PokeCard from './PokeCard'
import Selector from './Selector.jsx'

const Pokedex = () => {

 const [indivPoke, setIndivPoke] = useState() 

 const [poke, setPoke] = useState([])
 const [loading, setLoading] = useState(false)
 const [currentPage, setCurrentPage] = useState(1)
 const [pokePerPage, setPokePerPage] = useState(40)
 const [pkemon2, setPkemon2] = useState(false)

 const reloadPokedex = () => {
  setLoading(true)
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154`

    axios.get(URL)
    .then(res => {
      // console.log(res.data)
      setPoke(res.data.results)
      setLoading(false) } )
    .catch(err => console.log(err))
 }

 useEffect (
  () => {

    if (pkemon2 == false)
    reloadPokedex()

  } , []
 )

 

 const indexOFLastPoke = currentPage * pokePerPage
 const indexOfFisrtPoke = indexOFLastPoke - pokePerPage
 const currentPoke = indivPoke? indivPoke :
 poke.slice( indexOfFisrtPoke , indexOFLastPoke )

//  console.log(poke)
//  console.log(currentPoke)

  // Change pages

  const changePage = number => {
    setCurrentPage (number)
  }

  console.log(currentPage)

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='pokeDexCont2'>

      <div>
        <Selector setPoke={setPoke} 
        altPoke={setPkemon2} 
        reloadPokedex={reloadPokedex} 
        changePage={changePage} 
        setIndivPoke={setIndivPoke}/>
      </div>

      <div className='pokeDexCont' >
      { indivPoke? <PokeCard key={`https://pokeapi.co/api/v2/pokemon/${indivPoke}`} indivPoke={indivPoke} /> : currentPoke?.map ( pkemon => 
        < PokeCard key={pkemon.url} pkemon={pkemon} pkemon2={pkemon2}/> 
        )}
      </div>

      {indivPoke? '' : <Pagination pokePerPage={pokePerPage} 
      poke={poke} 
      changePage={changePage} />
    }

    </div>
  )
}

export default Pokedex