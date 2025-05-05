import React, { useState } from 'react'
import Nav from './components/Nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './components/Rout'
import Footer from './components/Footer'
import Homeproduct from './components/Homeproduct'

const App = () => {
  //Add To Cart
  const[cart , setCart] = useState([])

  //shop page product
  const [shop , setShop] = useState(Homeproduct)
  //shop search filter
  const [search,setSearch] = useState('')
 
  //shop category filter
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => {
      return product.cat === x 
    })
    setShop(catefilter)
  }

  const allcateFilter = () => {
    setShop(Homeproduct)
  }

  //shop search filter
  const searchlength = (search || []).length === 0
  const searchProduct = () =>  {

    if(searchlength) {
      alert('Please Search Something !')
      setShop(Homeproduct)
    } else {
        const searchFilter = Homeproduct.filter((x) => {
          return x.cat === search
        })
        setShop(searchFilter)
    }
  }

  //Add To Cart

  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if(exist) {
      alert('This product is already in cart')
    } else {
      setCart([...cart, {...product , qty :1 }])
      alert('Added To Cart')
    }
  }
  console.log(cart)


  return (
    <>
    <BrowserRouter>
      <Nav search={search} setSearch={setSearch} searchProduct={searchProduct}/>
      <Rout cart={cart} shop={shop} Filter={Filter} allcateFilter={allcateFilter} addtocart={addtocart} />
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App