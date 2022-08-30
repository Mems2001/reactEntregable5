import React from 'react'
import { Outlet , Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoutes = ( {trainer} ) => {

    
  
    if (trainer) {
        console.log(trainer)
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }

}

export default ProtectedRoutes