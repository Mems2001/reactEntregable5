import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Selector = ({setPoke , altPoke , reloadPokedex , changePage , setIndivPoke}) => {

  const [choice, setChoice] = useState('No selection made')

  const [loading, setLoading] = useState(false)

  const [pokeProps, setPokeProps] = useState('type')

  const [pokeProps2, setPokeProps2] = useState()

  const URL = `https://pokeapi.co/api/v2/${pokeProps}`

  useEffect (
    () => {

      if (pokeProps) {

        axios.get(URL)
      .then (res => {
        console.log(res.data.results)
        setPokeProps2(res.data.results) })
      .catch (err => console.log(err))

      }

      
    }, [URL]
  )

  const handleChange2 = e => {
    e.preventDefault()
    
    changePage(1)
    setIndivPoke('')
    setChoice(e.target.value)
    console.log(e.target.value)
    const URL = `https://pokeapi.co/api/v2/${pokeProps}/${e.target.value}/`

    // console.log(URL)

    axios.get(URL)
    .then (res => {
      // console.log(res.data.pokemon)
      setPoke(res.data.pokemon)
      altPoke(true)
      
    })
    .catch (err => console.log(err))
  }

  const handleReset = e => {
    altPoke(false)
    setIndivPoke('')
    setChoice('No selection made')
    reloadPokedex()
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    setIndivPoke(e.target.pokemonNameInput.value.trim().toLowerCase())
  }

  // console.log(pokeProps)
  console.log(pokeProps2)

  if (loading) {
    return <h2>Loading...</h2>
  } else {

  return (
    <div className='selectorContainer'>

      <form className='formContainer' onSubmit={handleSubmit}>
        <input type='text' placeholder='Write pokémon name' id='pokemonNameInput' className='pokemonNameInput'/>
        <button className='searchByNameButton'>Search</button>
      </form>

      <label htmlFor='selectorA' className='typeSelectorLabel'>Select by Type</label>

    
      <select onChange={handleChange2} id='selectorA' value={choice}>
          {pokeProps2?.map (
            pokeProp => <option>{pokeProp.name}</option>
          )}
          </select>
        
      <button onClick={handleReset} className='resetSelector' >Reset</button>
    
    </div>
  )
}
}

export default Selector