import React from 'react';

export default function Destination() {
  return (
    <>
      <div className='destination'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Welcome to Rome!</h2>
          <p>Visit Trevi Fountain, Colosseum, the Pantheon and more by booking our all-inclusive package which highlights all of the necessary tourist attractions you will need to have the perfect vacation.</p>

          <h3>Experience</h3>
          <h4>Highlights</h4>
          <ul>
            <li>Explore the Trevi Fountain. </li>
            <li>Walk the pebble streets and explore the city. </li>
            <li>Enjoy a morning, lunch or afternoon in the busy bars and restaurants.</li>
            <li>Don't miss out on many more experiences.</li>
          </ul>
          <h4>Full description</h4>
          <p>Rome (or Roma in Italian) is the capital of Italy and has a population of 2.8 million, the Romans. According to legend, Rome city was founded by the twins Romulus and Remus in 753 BCE. The city is located on the banks of the river Tiber and was founded on top of seven hills; Palatine Hill, Aventine Hill, Capitoline Hill, Caelian Hill, Esquiline Hill, Quirinal Hill and Viminal Hill. </p>
          <p>Particularly the area around Palatine Hill and Capitoline Hill would later become the centre of power of the enormous Roman Empire. You can find many ruins and excavations here of the Forum Romanum and the Colosseum gives you an impression of how gladiators had to do battle in this enormous Roman amphitheatre. The Pantheon, which is now a church, has its characteristic round, open roof and is one of the best kept buildings from Roman times.</p>
          <p>And the Via Appia takes you back in time along one of the oldest roads of Rome Italy. Basically, the city of Rome is one giant museum. It is therefore no surprise that the complete historic city centre is on the UNESCO World Heritage List. </p>
        </div>
        
      
        <div className='booking-container'>
          <div className='booking-wrapper'>
            <section className='booking-info'>
              <h5>From</h5>
              <p className='price'>€ 89</p>
              <p className='per-person'>per person</p>
            </section>
            <button type='button' className='btn-book'>Book now</button>
          </div>
        </div>

      
      
      </div>
      
    </>
  );
}