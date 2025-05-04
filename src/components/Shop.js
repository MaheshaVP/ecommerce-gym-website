import React from 'react'
import './Shop.css'
import { FaHeart , FaEye } from "react-icons/fa";

const Shop = ({shop}) => {
  return (
    <>
     <div className='shop'>
      <h2># Shop</h2>
      <p>Home . shop</p>
         <div className='container'>
            <div className='left_box'>
               <div className='category'>
                  <div className='header'>
                    <h3>all categories</h3>
                  </div>
                  <div className='box'>
                    <ul>
                      <li># Threadmill</li>
                      <li># Dumbell</li>
                      <li># Cardio</li>
                    </ul>
                  </div>
               </div>

               <div className='banner'>
                  <div className='img_box'>
                    <img src='images/shop_leftbanner.jpeg' alt='' />
                  </div>
               </div>
            </div>

            <div className='right_box'>
              <div className='banner'>
                <div className='img_box'>
                  <img src='images/shop_rtop.jpg' alt='' height={200}/>
                </div>
              </div>

              <div className='product_box'>
                <h2>Shop Product</h2>
                <div className='product_container'>
                  {
                    shop.map((curElem) => {
                      return (
                        <>
                          <div className='box'>
                            <div className='img_box'>
                              <img src={curElem.image} alt={curElem.Name}/>
                                <div className='icon'>
                                  <li><FaHeart /></li>
                                  <li><FaEye /></li>
                                </div>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
                </div>
              </div>

            </div>
         </div>
     </div>
    </>
  )
}

export default Shop