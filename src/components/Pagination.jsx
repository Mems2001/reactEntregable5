import React from 'react'

const Pagination = ( {pokePerPage , poke , changePage} ) => {

    const pageNumbers = []

    for (let i = 1 ; i <= Math.ceil(poke.length / pokePerPage) ; i++ ) {
        pageNumbers.push(i)
    }

  return (
    <div>
        {pageNumbers.map(
            number => <a  onClick={() => changePage(number)} key={number} >{number}</a>
        )}
    </div>
  )
}

export default Pagination