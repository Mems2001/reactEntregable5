import '../Pagination.css'
import React, { useEffect, useState } from 'react'
import { current } from '@reduxjs/toolkit'

const Pagination = ( {pokePerPage , poke , changePage, currentPage} ) => {

    const [showPage, setShowPage] = useState(false)

    const pageNumbers = []

    for (let i = 1 ; i <= Math.ceil(poke.length / pokePerPage) ; i++ ) {
        pageNumbers.push(i)
    }

    const a= currentPage - 1
    const b = currentPage- 2
    const c = currentPage + 1
    const d = currentPage + 2
     

    const pagesShowed = [
      a , b , currentPage , c , d
    ]

    console.log (pagesShowed)

  return (
    <nav className='pagination'>
      <a className='currentPage showed pageBtn' onClick={() => changePage(1)} >First</a>
      <a className={`pageBtn ${currentPage > 3 ? 'showed' : 'nShowed'}`} >...</a>
        {pageNumbers.map(
            number => <a className={`pageBtn ${pagesShowed.includes(number) ? 'showed' : 'nShowed' } ${currentPage == number ? 'currentPage' : ''}`} onClick={() => changePage(number)} key={number} >{number}</a>
        )}
        <a className={`pageBtn ${currentPage < pageNumbers.length ? 'showed' : 'nShowed'}`} >...</a>
        <a className='currentPage showed pageBtn' onClick={() => changePage(pageNumbers.length)} >Last</a>
    </nav>
  )
}

export default Pagination