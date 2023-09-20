import React from 'react';
import '../App.css';
import { Button } from './Button';
import './ContactBanner.css';
import './Places.css';



function ContactBanner() {
    return ( 
      <div className='contact-container'>
        
        <h1>CONTACT US</h1>
        
        
        <div className='info-container'>
       <div className='info-title'>
      <h3> Plan your vacation with us.</h3>
    </div>
    <div className='info-body'>
      <p> sunnytravel@info.com</p>
      <p>  +355 67 988 5543 </p>
    </div>
    <div className='info-price'>
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