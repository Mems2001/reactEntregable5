import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Selector = ({setPoke , altPoke , reloadPokedex , changePage , setIndivPoke, setPokePerPage}) => {

  const [choice, setChoice] = useState('All')

  const [loading, setLoading] = useState(false)

  const [pokeProps, setPokeProps] = useState('type')

  const [pokeProps2, setPokeProps2] = useState()

  const pkePerPage = [
    4 , 8 , 12 , 16 , 20
  ]

  

  const URL = `https://pokeapi.co/api/v2/${pokeProps}`

  useEffect (
    () => {

      if (pokeProps) {

        axios.get(URL)
      .then (res => {
        // console.log(res.data.results)
        setPokeProps2(res.data.results) })
      .catch (err => console.log(err))

      }

      
    }, [URL]
  )

  const handleChange = e => {
    setPokePerPage(e.target.value)
  }

  const handleChange2 = e => {

    if (e.target.value != 'All') {

    e.preventDefault()
    
    changePage(1)
    setIndivPoke('')
    setChoice(e.target.value)
    // console.log(e.target.value)
    const URL = `https://pokeapi.co/api/v2/${pokeProps}/${e.target.value}/`

    // console.log(URL)

    axios.get(URL)
    .then (res => {
      // console.log(res.data.pokemon)
      setPoke(res.data.pokemon)
      altPoke(true)
      
    })
    .catch (err => console.log(err))
  } else if ( e.target.value == 'All' ) {
    altPoke(false)
    setIndivPoke('')
    setChoice('All')
    reloadPokedex()
  }

  }

  const handleReset = e => {
    altPoke(false)
    setIndivPoke('')
    setChoice('All')
    reloadPokedex()
    setPokePerPage(4)
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    setIndivPoke(e.target.pokemonNameInput.value.trim().toLowerCase())
    setChoice('All')
  }

  // console.log(pokeProps)
  // console.log(pokeProps2)

  if (loading) {
    return <h2>Loading...</h2>
  } else {

  return (
    <div className='selectorContainer'>

<button onClick={handleReset} className='resetSelector' >Reset</button>

      <form className='formContainer' onSubmit={handleSubmit}>
        <input type='text' placeholder='Write pokémon name' id='pokemonNameInput' className='pokemonNameInput'/>
        <button className='searchByNameButton'>Search</button>
      </form>

      <label htmlFor='selectorA' className='typeSelectorLabel'>Select by Type</label>

    
      <select className='selectors' onChange={handleChange2} id='selectorA' value={choice}>
          <option id='unseen'>All</option>
          {pokeProps2?.map (
            pokeProp => <option>{pokeProp.name}</option>
          )}
          </select>

      
        <label htmlFor='pokePerPageS' className='typeSelectorLabel' >Pokémon per page</label>
        <select className='selectors' onChange={handleChange} id='pokePerPageS'>
            {pkePerPage.map (
              each => <option value={each}>{each}</option> 
            )}
        </select>
      
    
    </div>
  )
}
}

export default Selector