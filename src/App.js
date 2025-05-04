import React, { useState } from 'react'
import Nav from './components/Nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './components/Rout'
import Footer from './components/Footer'
import Homeproduct from './components/Homeproduct'

const App = () => {
  //shop page product
  const [shop , setShop] = useState(Homeproduct)

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Rout shop={shop} />
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App