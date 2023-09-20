import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Footer.css';



function Footer() {
    return (

        <div className='footer'>

        <div className="footer-section">

            <div className='footer-logo'>
                <h3> Sunny Travel</h3>
                <p> Want to know more? </p>
            </div>

            <div className='footer-contact'>
                <h4>Contact Us</h4>
                <p> sunnytravel@info.com </p>
                <p> +355 67 988 5543 </p>
            </div>
        </div>

        <div className='footer-end'>
            <p> Offices located in Main Blvd. 34th Street.</p>
        </div>
        

        </div>
        
    )

    
}

export default Footer;