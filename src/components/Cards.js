import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these epic destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
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
          </ul>
          <ul className='cards__items'>
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
    </div>
  )
}

export default Cards;