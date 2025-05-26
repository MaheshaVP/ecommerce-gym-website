import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound"; // Make sure the path is correct

const Rout = ({ shop, Filter, allcateFilter, addtocart, cart, setCart }) => {
  return (
    <Routes>
      <Route path="/" element={<Home addtocart={addtocart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route
        path="/shop"
        element={
          <Shop
            shop={shop}
            Filter={Filter}
            allcateFilter={allcateFilter}
            addtocart={addtocart}
          />
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> {/* This will catch all undefined routes */}
    </Routes>
  );
};

export default Rout;