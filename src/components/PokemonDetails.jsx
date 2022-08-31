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

        <div className='boxedDetails'>
            <div className='boxed2' >
              <h4>Type: </h4>
              <div className='theBox'>
                {pokeDetailed?.types.map(
                  type => <div className={`typeStyle bcolor-${type.type.name}`}>{type.type.name}</div>
                )}
              </div>
              </div>
            <div className='boxed2' >
              <h4>Abilities: </h4>
              <div className='theBox'>
                  {pokeDetailed?.abilities.map(
                    ab => <div>{ab.ability.name}</div>
                  )
                  }
              </div>
            </div>
        </div>

        <div className='statsContainer'>
          <h2>Stats</h2>
          <div className='stats'>
                  {pokeDetailed?.stats.map(
                    st => <div className='stat'>
                      <span>{st.stat.name}:</span>
                      <span>{st.base_stat}/150</span>
                      <div className='barraStat1'>
                        <div className={`barraStat2 bcolor-${pokeDetailed?.types[0].type.name}`} style={{width: `${st.base_stat}%`}}></div>
                      </div>
                    </div>
                  )

                  }
          </div>
        </div>

        <div className='movementsContainer'>
          <h2>Movements</h2>
          <div className='moves'>
            {
              pokeDetailed?.moves.map(
                move => <span className='move'>{move.move.name}</span>
              )
            }
          </div>
        </div>

      </div>
    
    </article>
    
  )
}

export default PokemonDetails