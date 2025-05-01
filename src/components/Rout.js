import React from 'react'
import { Routes , Route } from 'react-router'
import Home from './Home'
import Shop from './Shop'

const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='shop' element={<Shop />} />
    </Routes>
    </>
  )
}

export default Rout