import React from 'react';
import { Button } from '../Button';
import '../../App.css';
import CardItem from '../CardItem';

import '../Cards.css';
import './Services.css';


function Services() {
    return (
      <div className='service-container'>

        <h1>OUR SERVICES</h1>
        
        <div className='service-btns'>
          <Button
            path='/sign-up'
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
  
          </div>


          <section className='heading'>
        <h2>Explore these destinations</h2>

        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
          <CardItem 
            src="card1.jpg"
            text="Experience museums, fountains and walk down beautiful streets."
            label="ROME"
            price="89€"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="card2.jpg"
            text="Visit Acropolis and experience the magic of Greece's capital."
            label="ATHENS"
            price="95€"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="card3.jpg"
            text="A lively city, full of energy, pubs, bars and shops. Don't miss out."
            label="BUDAPEST"
            price="105€"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="card4.jpg"
            text="Take beautiful photos and admire the fashion and luxury."
            label="MILAN"
            price="120€"
            path="/services/activity"
            ></CardItem>
            
          </ul>
          </div>
        </div>
        
      </section>
        


      <section className='heading'>
        <h2>Activities we think you would enjoy</h2>

        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="card5.jpg"
              text="Visit Waterfalls and other sights."
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="card6.jpg"
              text="Zip-lining for a fun time."
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="card7.jpg"
              text="Swim with dolphins for an unforgettable experience."
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="card8.jpg"
              text="Early morning hiking to beautiful mountains."
              label="Europe"
              path="/services/activity"
            ></CardItem>
            
          </ul>
          </div>
        </div>
        
      </section>
      
        
      </div>

      

      );
    }
    
    export default Services;



  
        