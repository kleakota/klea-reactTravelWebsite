import React from 'react';
import '../App.css';
import { Button } from './Button';
import './ContactBanner.css';
import './Places.css';



function ContactBanner() {
    return ( 
      <div className='contact-container'>
        
        <h1>CONTACT US</h1>
        
        
        <div className='contactInfo-container'>
       <div className='contactInfo-title'>
      <h3> Plan your vacation with us.</h3>
    </div>
    <div className='contactInfo-body'>
      <p> sunnytravel@info.com</p>
      <p>  +355 67 988 5543 </p>
    </div>
    <div className='contactInfo-price'>
      <h4> Let's connect!</h4>
    </div>
    
  </div>
        
  <div className='contact-btns'>
          <Button
            path='/sign-up'
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
  
          </div>
  
  
      </div>
  
  
  
  
    );
  }
  
  
  
  export default ContactBanner;