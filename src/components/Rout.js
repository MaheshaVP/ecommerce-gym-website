import React from 'react'
import { Routes , Route } from 'react-router'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'

const Rout = ({shop , Filter , allcateFilter , addtocart , cart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart cart={cart} />} />
        <Route path='/shop' element={<Shop shop={shop} Filter={Filter} allcateFilter={allcateFilter} addtocart={addtocart} />} />
    </Routes>
    </>
  )
}

export default Rout