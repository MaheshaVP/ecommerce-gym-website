import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div className='about'>
        <div className='top'>
            <h2>About us</h2>
            <div className='image-box'>
                <img src='images/about.jpg' alt='about page'></img>
                <p>“Fuel Your Fitness Journey with Premium Gym Gear” 
                “Strong Equipment. Stronger You.”</p>
            </div>
        </div>

        <div className='middle'>
          <div className='main1'>
            <h2>Who We Are</h2>
            <p>Sahara Fitness is a leading destination for high-quality gym and fitness equipment. Our mission is to empower individuals and fitness   centers with the tools they need to achieve their health and strength goals. From beginners building a home gym to professional trainers outfitting full-scale facilities—we’ve got you covered.Founded in [Year], Sahara Fitness was born out of a passion for fitness and the desire to make top-tier equipment accessible and affordable. What started as a small setup has now grown into a trusted brand across India (or your region), helping thousands of customers stay fit and active.
            </p>
          </div>

          <div className='main3'>
            <h3>What We Offer</h3>
            <ul>
              <li>Home gym essentials</li>
              <li>Commercial gym equipment</li>
              <li>Weight training tools</li>
              <li>Cardio machines</li>
              <li>Accessories (gloves, mats, etc.)</li>
            </ul>
          </div>
        </div>

        <div className='footer'>
          <h3>Our top selling items</h3>
          <div className='images'>
          <img src='images/threadmill1.jpg' alt=''></img>

          <img src='images/dumbell2.jpg' alt=''></img>

          <img src='images/bike1.jpg' alt=''></img>
          
          <img src='images/cardio1.jpg' alt=''></img>
          </div>
        </div>
    </div>
    </>
  )
}

export default About