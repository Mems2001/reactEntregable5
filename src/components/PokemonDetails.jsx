import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {

  const [pokeDetailed, setPokeDetailed] = useState()

  const {name} = useParams()

  useEffect (
    () => {
      const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
      axios.get(URL)
      .then (res => {
        console.log(res.data)
        setPokeDetailed(res.data)
      })
      .catch (err => console.log(err))
    } , []
  )

  return (
  
    <article className='indivPokemonArticle'>
      
      <img className='pokeDetailedImg' src={pokeDetailed?.sprites.other['official-artwork'].front_default} />

      <div className='detailsContainer'>

        <div className={`colorCont bcolor-${pokeDetailed?.types[0].type.name}`}></div>

        <div className='detailsName'>
          <span>#{pokeDetailed?.id}</span>
          <span>{name}</span>
        </div>

        <div className='generalDetails' >
          <span className='generalStats'> Weight:
            <span className='values'>{pokeDetailed?.weight}
            </span>
          </span>
          <span className='generalStats'> Height: 
            <span className='values'>{pokeDetailed?.height}
            </span>
          </span>
        </div>

      </div>
    
    </article>
    
  )
}

export default PokemonDetails