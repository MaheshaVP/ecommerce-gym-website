import React from 'react'
import './Cart.css'
import {Link} from 'react-router-dom'

const Cart = ({cart}) => {
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
                                        <h4>{curElm.cat}</h4>
                                        <h3>{curElm.Name}</h3>
                                        <p>Price : Rs.{curElm.price}</p>
                                        <div className='quantity'>
                                            <button>+</button>
                                            <input type='number' value={curElm.qty}  />
                                            <button>-</button>
                                        </div>
                                        <p>Total : Rs.{curElm.price * curElm.qty}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </>
  ) 
}

export default Cart