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
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer