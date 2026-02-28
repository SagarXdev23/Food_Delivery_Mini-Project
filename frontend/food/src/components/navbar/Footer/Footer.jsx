import React from 'react'
import './Footer.css'
import { assets } from '../../../assets/assets'


function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse ratione ipsa dolorum similique sequi debitis at, quo, corrupti possimus enim iusto, ad iste alias laborum ducimus quibusdam id fugit.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </ul>
                
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-456789876</li>
                <li>contact@food.com</li>
            </ul>
            </div>
     
      
      <p className="footer-copyright">
         <hr />
        Copyright 2024 @ food.com  - All right reserved.
      </p>
    </div>


        </div>
            

      
  )
}

export default Footer
