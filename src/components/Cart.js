import React from 'react'
import './Cart.css'
import {Link} from 'react-router-dom'
import { RiCloseFill } from "react-icons/ri";

const Cart = ({cart , setCart}) => {

    //Increment Quantity
    const incqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? {...exist, qty: exist.qty + 1} : curElm
        }))
    }

    //Decrement Quantity
    const decqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? {...exist, qty: exist.qty - 1} : curElm
        }))
    }

    //Removing Cart product
    const removeProduct = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        if(exist.qty >= 0) {
            setCart(cart.filter((curElem) => {
                return curElem.id !== product.id
            }))
        }
    }

    //Total Price
    const total = cart.reduce((price, item) => price + item.qty * item.price , 0)

  return (
    <>
        <div className='cart'>
            <h3>Cart</h3>
            {
                cart.length === 0 && 
                <>
                    <div className='empty_cart'>
                        <h2>Your Shopping Cart is Empty</h2>
                        <Link to='/shop'> <button>Shop Now</button> </Link>
                    </div>
                </>
            }
            <div className='container'>
                {
                    cart.map((curElm) => {
                        return (
                            <>
                                <div className='box'>
                                    <div className='img_box'>
                                        <img src={curElm.image} alt={curElm.Name} />
                                    </div>
                                    <div className='detail'>
                                        <div className='info'>
                                            <h4>{curElm.cat}</h4>
                                            <h3>{curElm.Name}</h3>
                                            <p>Price : Rs.{curElm.price}</p>
                                            <p>Total : Rs.{curElm.price * curElm.qty}</p>
                                        </div>
                                        <div className='quantity'>
                                            <button onClick={()=> incqty (curElm)}>+</button>
                                            <input type='number' value={curElm.qty}  />
                                            <button onClick={() => decqty (curElm)}>-</button>
                                        </div>    
                                        <div className='icon'>
                                            <li onClick={() => removeProduct (curElm)}><RiCloseFill /></li> 
                                        </div>       
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className='bottom'>
                {
                    cart.length > 0 && 
                    <>
                    <div className='Total'>
                        <h4>Sub Total : Rs.{total}</h4>
                    </div>
                    <button>Checkout</button>
                    </>
                }
            </div>
        </div>
    </>
  ) 
}

export default Cart