import React from 'react'
import { Routes , Route } from 'react-router'
import Home from './Home'
import Shop from './Shop'

const Rout = ({shop}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='shop' element={<Shop shop={shop}/>} />
    </Routes>
    </>
  )
}

export default Rout