import React from 'react'
import { FaPiggyBank , FaShippingFast , FaHeadphones } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='container'>
                <div className='left-box'>
                    <div className='box'>
                        <div className='icon_box'>
                            <FaPiggyBank />
                        </div>
                        <div className='detail'>
                            <h3>Great Savings</h3>
                            <p>you saved nearly 80% on your order</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon_box'>
                            <FaShippingFast />
                        </div>
                        <div className='detail'>
                            <h3>Free Delevary</h3>
                            <p>you saved nearly 80% on your order</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon_box'>
                            <FaHeadphones />
                        </div>
                        <div className='detail'>
                            <h3>24/7 support</h3>
                            <p>you saved nearly 80% on your order</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon_box'>
                            <RiWallet3Line />
                        </div>
                        <div className='detail'>
                            <h3>money back</h3>
                            <p>you saved nearly 80% on your order</p>
                        </div>
                    </div>

                </div>

                <div className='right-box'>
                    <div className='header'>
                        <img src='images/logo_webp.jpg' alt='Logo' width={250} height={100} />
                        <p>our company will never lost your trust on any deals</p>
                    </div>
                    <div className='bottom'>
                        <div className='box'>
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>Sales</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <h3>Products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track Order</li>
                                <li>New Product</li>
                                <li>old Product</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <h3>Contact us</h3>
                            <ul>
                                <li> Near PVP school mariyappanapalya</li>
                                <li>Bengaluru</li>
                                <li>+91 0123456789</li>
                                <li>sahara@gmail.com</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className='copy'>
                <p>&copy; 2025 Sahara Fitness. All rights reserved.</p>
            </div>
        </div>
    </>
  )
}

export default Footer

