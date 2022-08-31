import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({pkemon , pkemon2, indivPoke}) => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const [pkeInfo, setPkeInfo] = useState()

    useEffect(
        () => {

            if (pkemon2) {
                const URL = `${pkemon?.pokemon.url}`
                setLoading(true)

                // console.log(URL)
    
                axios.get(URL)
                .then(res => {
                    setPkeInfo(res.data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
            } else if (indivPoke) {
                setLoading(true)
                const URL =`https://pokeapi.co/api/v2/pokemon/${indivPoke}`
                axios.get(URL)
                .then(res => {
                    setPkeInfo(res.data)
                    console.log(res.data)
                    setLoading(false)
                })
                .catch(err => console.log(err))

            } else {

            setLoading(true)
            const URL = `${pkemon?.url}`
            

            // console.log(URL)

            axios.get(URL)
            .then(res => {
                setPkeInfo(res.data)
                setLoading(false)
                })
            .catch(err => console.log(err))
        }

        } , [pkemon]
    )

    // console.log(pkeInfo)

    const shadow = () => {
        if (pkeInfo?.types[1]) {
            return pkeInfo?.types[1].type.name    
        } else {
            return pkeInfo?.types[0].type.name
        }
    }

    
    const pName = indivPoke? `${pkeInfo?.name}` : pkemon2 ? `${pkemon.pokemon.name}` : `${pkemon.name}`
    
    

    // console.log(pName)

    const handleClick = () => {
        navigate(`/pokedex/${pName}`)
    }

    if (loading) {
        return <div className='cardLoading'>Loading...</div>
    } else {

  return (
    <article className={`pokeCard bcolor-${pkeInfo?.types[0].type.name} shad-${shadow()}`}
    onClick={handleClick} >
        <div className='pokeName'><b>{indivPoke? `${pkeInfo?.name}` : pkemon2? `${pkemon.pokemon.name}` : `${pkemon.name}`}</b></div>
        <img className='spriteCard' src={`${pkeInfo?.sprites.other['official-artwork'].front_default}`} alt='No image available' />
        
        <div className='cardBody' >
            
            <div className='cardInfo'><span>Types: </span>{pkeInfo?.types.map(
                t => <span className={`typeStyle bcolor-${t.type.name}`}>{t.type.name} </span>
            )}
            </div>
            
            <div>Stats:
                <div className='pokeStats'>
                    {pkeInfo?.stats.map(
                        stat => <div className='pokeStat'><span className='statName'>{stat.stat.name}: </span> <span>{stat['base_stat']} </span></div>
                    )}
                </div>
            </div>
        </div>

    </article>
  )
                    }
}

export default PokeCard