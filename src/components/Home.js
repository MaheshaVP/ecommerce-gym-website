import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './Homeproduct'
import { FaEye,FaHeart, FaFacebook ,FaTwitter , FaInstagram ,FaYoutube,FaShoppingCart} from "react-icons/fa";
// import {  } from "react-icons/fa";

const Home = ({addtocart}) => {
  //product category
  const[newProduct , setNewProduct] = useState([])
  const[featuredProduct , setFeaturedProduct] = useState([])
  const[topProduct , setTopProduct] = useState([])

  //Trending product
  const[trendingProduct , setTrendingProduct] = useState(Homeproduct)

  //filter of trending product
  const filtercategory = (x) => {
    const filterproduct = Homeproduct.filter((curElm)=> {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }

  //All trending Product
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct)
  }

  //product type
  useEffect(()=> {
    productcategory()
  },[])

  const productcategory = () => {
    //New Product
    const newcategory = Homeproduct.filter((x) => {
      return x.type === 'new'
    })
    setNewProduct(newcategory)

    //featured Product
    const featuredcategory = Homeproduct.filter((x) => {
      return x.type === 'featured'
    })
    setFeaturedProduct(featuredcategory)

    //top product
    const topcategory = Homeproduct.filter((x) => {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }

  return (
    <>
    <div className='home'>
        <div className='top_banner'>
            <div className='content'> 
              <h3>Black and Cream color</h3>
              <h2>Threadmill</h2>
              <p>20% off on your first order</p>
              <Link to="/shop" className='link'>Shop Now</Link>
            </div>
        </div>

        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={()=> allTrendingProduct()}>trending product</h2>
                </div>
                <div className='category'>
                  <h3 onClick={()=> filtercategory ('new')}>New</h3>
                  <h3 onClick={()=> filtercategory ('featured')}>Featured</h3>
                  <h3 onClick={()=> filtercategory ('top')}>Top Selling</h3>
                </div>
              </div>
              <div className='products'>  
                <div className='container'>
                  {
                    trendingProduct.map((curElm)=> {
                      return (
                        <>
                          <div className='box'>
                            <div className='imgbox'>
                              <img src={curElm.image} alt='product'></img>
                              <div className='icon'>
                                <div className='iconbox'>
                                  <FaEye />
                                </div>
                                <div className='iconbox'>
                                  <FaHeart />
                                </div>
                              </div>
                            </div>
                            <div className='info'>
                              <h3>{curElm.Name}</h3>
                              <p>RS.{curElm.price}</p>
                              <button className='btn' onClick={() => addtocart (curElm)}>Add To Cart</button>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
                </div>
                <button>Show More</button>
              </div>
            </div>

            <div className='right_box'>
             <div className='right_container'>
              <div className='testimonial'>
                <div className='head'>
                  <h3>Our Testimonial</h3>
                </div>
                <div className='detail'>
                  <div className='img_box'>
                    <img src='images/indexlogo.png' alt='testimonial'></img>
                  </div>
                  <div className='info'>
                    <h3>Bodybuilder</h3>
                    <h4>Gym and Home Workout</h4>
                    <p>Build muscle, increase endurance, and enhance overall fitness with targeted strength exercises.</p>
                  </div>
                </div>
              </div>
                <div className='newsletter'>
                  <div className='head'>
                    <h3>Newsletter</h3>
                  </div>
                  <div className='form'>
                    <p>join our mailing list</p>
                    <input type='email' placeholder='E-mail' autoComplete='off'></input>
                    <button type='submit'>Subscribe</button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <FaFacebook />
                      </div>
                      <div className='icon'>
                        <FaTwitter />
                      </div>
                      <div className='icon'>
                        <FaInstagram />
                      </div>
                      <div className='icon'>
                        <FaYoutube />
                      </div>
                    </div>
                  </div>
                </div>
             </div>
            </div>
          </div>
        </div>

        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src='images/multiple-home-banner11.jpg' alt='banner'></img>
              </div>
              <div className='box'>
                <img src='images/multiple-home-banner2.jpg' alt='banner'height={360}></img>
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src='images/multiple-home-banner3.jpg' alt='' width={450} height={200}></img>
                <img src='images/multiple-home-banner4.jpg' alt=''width={340} height={200}></img>
              </div>
              <div className='bottom'>
                <img src='images/multiple-home-banner5.jpg' alt=''></img>
              </div>
            </div>
          </div>
        </div>

        <div className='product_type'>
          <div className='container'>
            <div className='box'> 
              <div className='header'>
                <h2>New Product</h2>
              </div>
              {
                newProduct.map((curElm) => {
                  return (
                    <>
                      <div className='productbox'>
                        <div className='img_box'>
                          <img src={curElm.image} alt=''></img>
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>Rs.{curElm.price}</p>
                          <div className='icon'>
                            <button><FaEye /></button>
                            <button><FaHeart /></button>
                            <button onClick={() => addtocart (curElm)}><FaShoppingCart /></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>

            <div className='box'> 
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {
                featuredProduct.map((curElm) => {
                  return (
                    <>
                      <div className='productbox'>
                        <div className='img_box'>
                          <img src={curElm.image} alt=''></img>
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>Rs.{curElm.price}</p>
                          <div className='icon'>
                            <button><FaEye /></button>
                            <button><FaHeart /></button>
                            <button onClick={() => addtocart (curElm)}><FaShoppingCart /></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>

            <div className='box'> 
              <div className='header'>
                <h2>Top Product</h2>
              </div>
              {
                topProduct.map((curElm) => {
                  return (
                    <>
                      <div className='productbox'>
                        <div className='img_box'>
                          <img src={curElm.image} alt=''></img>
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>Rs.{curElm.price}</p>
                          <div className='icon'>
                            <button><FaEye /></button>
                            <button><FaHeart /></button>
                            <button onClick={() => addtocart (curElm)}><FaShoppingCart /></button>
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
    </>
  )
}

export default Home