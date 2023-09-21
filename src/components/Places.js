import React from 'react';
import '../App.css';
import './Places.css';



function Places() {
    return ( 

    <div className='places-container'>
      
      <div className='places-headings'>

      <h1>Check out these destinations!</h1>
      <p>Browse through our packages.</p> 

      </div>

      <div className='all-cards'>

        <div className='card-container'>
          <div className='card-title'>
            <h3> Rome</h3>
          </div>
          <div className='card-img'>
          <div className='img1'></div>
          </div>
          <div className='card-body'>
            <p> Visit museums, fountains, walk down the beautiful streets and try some gelato.</p>
          </div>
          <div className='card-price'>
            <h4> $89</h4>
          </div>
          <div className='card-btn'>
            <button path='/destinations/Rome.js'> View More</button>
          </div>
        </div>

        <div className='card-container'>
          <div className='card-title'>
            <h3> Athens</h3>
          </div>
          <div className='img2'></div>
          <div className='card-body'>
            <p> Visit Acropolis, try the famous gyros and experience the magic of Greece's capital.</p>
          </div>
          <div className='card-price'>
            <h4> $79</h4>
          </div>
          <div className='card-btn'>
            <button path='/destination'> View More</button>
          </div>
         </div>
        </div>

        <div className='all-cards'>

        <div className='card-container'>
          <div className='card-title'>
            <h3> Budapest</h3>
          </div>
          <div className='img3'></div>
          <div className='card-body'>
            <p> Visit this lively city, full of energy, pubs, bars and shops. Don't miss out.</p>
          </div>
          <div className='card-price'>
            <h4> $105</h4>
          </div>
          <div className='card-btn'>
            <button path='/destination'> View More</button>
          </div>
        </div>

        <div className='card-container'>
          <div className='card-title'>
            <h3> Milano</h3>
          </div>
          <div className='img4'></div>
          <div className='card-body'>
            <p> Visit this lively city, full of energy, pubs, bars and shops. Don't miss out.</p>
          </div>
          <div className='card-price'>
            <h4> $105</h4>
          </div>
          <div className='card-btn'>
            <button path='/destination'> View More</button>
          </div>
        </div>
        </div>
      </div>


       
  
    );
}

export default Places;