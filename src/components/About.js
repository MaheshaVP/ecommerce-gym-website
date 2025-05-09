import React from 'react'
import './styles/About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='top'>
        <h2>About Us</h2>
        <div className='image-box'>
          <img src='../ecommerce-gym-website/images//about.jpg' alt='about page' />
          <p>
            “Fuel Your Fitness Journey with Premium Gym Gear”<br />
            <strong>“Strong Equipment. Stronger You.”</strong>
          </p>
        </div>
      </div>

      <div className='middle'>
        <div className='main1'>
          <h2>Who We Are</h2>
          <p>
            Sahara Fitness is a leading destination for high-quality gym and fitness equipment.
            Our mission is to empower individuals and fitness centers with the tools they need to
            achieve their health and strength goals. From beginners building a home gym to
            professional trainers outfitting full-scale facilities—we’ve got you covered.
            Founded in 2020, Sahara Fitness was born out of a passion for fitness and the desire to
            make top-tier equipment accessible and affordable. What started as a small setup has
            now grown into a trusted brand across India, helping thousands of customers stay fit
            and active.
          </p>
        </div>

        <div className='main3'>
          <h3>What We Offer</h3>
          <ul>
            <li>Home Gym Essentials</li>
            <li>Commercial Gym Equipment</li>
            <li>Weight Training Tools</li>
            <li>Cardio Machines</li>
            <li>Fitness Accessories (Gloves, Mats, etc.)</li>
          </ul>
        </div>
      </div>

      <div className='footer'>
        <h3>Our Top Selling Items</h3>
        <div className='images'>
          <div className='product'><img src='../ecommerce-gym-website/images//threadmill1.jpg' alt='Treadmill' /><p>Treadmill</p></div>
          <div className='product'><img src='../ecommerce-gym-website/images//dumbell2.jpg' alt='Dumbbells' /><p>Dumbbells</p></div>
          <div className='product'><img src='../ecommerce-gym-website/images//bike1.jpg' alt='Exercise Bike' /><p>Exercise Bike</p></div>
          <div className='product'><img src='../ecommerce-gym-website/images//cardio1.jpg' alt='Cardio Machine' /><p>Cardio Machine</p></div>
        </div>
      </div>
    </div>
  )
}

export default About
