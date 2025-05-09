import React, { useState } from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom';
import Homeproduct from './Homeproduct';
import {
  FaEye,
  FaHeart,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaShoppingCart
} from "react-icons/fa";

// Categorize products once at module level (before component function)
const newProductData = Homeproduct.filter((x) => x.type === 'new');
const featuredProductData = Homeproduct.filter((x) => x.type === 'featured');
const topProductData = Homeproduct.filter((x) => x.type === 'top');

const Home = ({ addtocart }) => {
  const [newProduct] = useState(newProductData);
  const [featuredProduct] = useState(featuredProductData);
  const [topProduct] = useState(topProductData);
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

  const filtercategory = (x) => {
    const filtered = Homeproduct.filter((curElm) => curElm.type === x);
    setTrendingProduct(filtered);
  };

  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct);
  };

  return (
    <div className='home'>
      {/* Top Banner */}
      <div className='top_banner'>
        <div className='content'>
          <h3>Black and Cream color</h3>
          <h2>Threadmill</h2>
          <p>20% off on your first order</p>
          <Link to="/shop" className='link'>Shop Now</Link>
        </div>
      </div>

      {/* Trending Products */}
      <div className='trending'>
        <div className='container'>
          <div className='left_box'>
            <div className='header'>
              <div className='heading'>
                <h2 onClick={allTrendingProduct}>Trending Product</h2>
              </div>
              <div className='category'>
                <h3 onClick={() => filtercategory('new')}>New</h3>
                <h3 onClick={() => filtercategory('featured')}>Featured</h3>
                <h3 onClick={() => filtercategory('top')}>Top Selling</h3>
              </div>
            </div>
            <div className='products'>
              <div className='container'>
                {trendingProduct.map((curElm) => (
                  <div className='box' key={curElm.id}>
                    <div className='imgbox'>
                      <img src={curElm.image} alt="Product" />
                      <div className='icon'>
                        <div className='iconbox'><FaEye /></div>
                        <div className='iconbox'><FaHeart /></div>
                      </div>
                    </div>
                    <div className='info'>
                      <h3>{curElm.Name}</h3>
                      <p>Rs.{curElm.price}</p>
                      <button className='btn' onClick={() => addtocart(curElm)}>Add To Cart</button>
                    </div>
                  </div>
                ))}
              </div>
              <button>Show More</button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className='right_box'>
            <div className='right_container'>
              <div className='testimonial'>
                <div className='head'><h3>Our Testimonial</h3></div>
                <div className='detail'>
                  <div className='img_box'>
                    <img src='../ecommerce-gym-website/images//indexlogo.png' alt="Testimonial" />
                  </div>
                  <div className='info'>
                    <h3>Bodybuilder</h3>
                    <h4>Gym and Home Workout</h4>
                    <p>Build muscle, increase endurance, and enhance overall fitness with targeted strength exercises.</p>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className='newsletter'>
                <div className='head'><h3>Newsletter</h3></div>
                <div className='form'>
                  <p>Join our mailing list</p>
                  <input type='email' placeholder='E-mail' autoComplete='off' />
                  <button type='submit'>Subscribe</button>
                  <div className='icon_box'>
                    <div className='icon'><FaFacebook /></div>
                    <div className='icon'><FaTwitter /></div>
                    <div className='icon'><FaInstagram /></div>
                    <div className='icon'><FaYoutube /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className='banners'>
        <div className='container'>
          <div className='left_box'>
            <div className='box'><img src='../ecommerce-gym-website/images//multiple-home-banner11.jpg' alt="Banner" /></div>
            <div className='box'><img src='../ecommerce-gym-website/images//multiple-home-banner2.jpg' alt="Banner" height={360} /></div>
          </div>
          <div className='right_box'>
            <div className='top'>
              <img src='../ecommerce-gym-website/images//multiple-home-banner3.jpg' alt="Banner" width={450} height={200} />
              <img src='../ecommerce-gym-website/images//multiple-home-banner4.jpg' alt="Banner" width={340} height={200} />
            </div>
            <div className='bottom'>
              <img src='../ecommerce-gym-website/images//multiple-home-banner5.jpg' alt="Banner" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Type Sections */}
      <div className='product_type'>
        <div className='container'>

          {/* New Products */}
          <div className='box'>
            <div className='header'><h2>New Product</h2></div>
            {newProduct.map((curElm) => (
              <div className='productbox' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.image} alt="Product" />
                </div>
                <div className='detail'>
                  <h3>{curElm.Name}</h3>
                  <p>Rs.{curElm.price}</p>
                  <div className='icon'>
                    <button><FaEye /></button>
                    <button><FaHeart /></button>
                    <button onClick={() => addtocart(curElm)}><FaShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Products */}
          <div className='box'>
            <div className='header'><h2>Featured Product</h2></div>
            {featuredProduct.map((curElm) => (
              <div className='productbox' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.image} alt="Product" />
                </div>
                <div className='detail'>
                  <h3>{curElm.Name}</h3>
                  <p>Rs.{curElm.price}</p>
                  <div className='icon'>
                    <button><FaEye /></button>
                    <button><FaHeart /></button>
                    <button onClick={() => addtocart(curElm)}><FaShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Top Products */}
          <div className='box'>
            <div className='header'><h2>Top Product</h2></div>
            {topProduct.map((curElm) => (
              <div className='productbox' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.image} alt="Product" />
                </div>
                <div className='detail'>
                  <h3>{curElm.Name}</h3>
                  <p>Rs.{curElm.price}</p>
                  <div className='icon'>
                    <button><FaEye /></button>
                    <button><FaHeart /></button>
                    <button onClick={() => addtocart(curElm)}><FaShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
