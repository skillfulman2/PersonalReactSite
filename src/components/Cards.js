import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my recent posts</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://lh3.googleusercontent.com/MKTga850LvPDPinmBc50maRlrSC5yH7CHhXixfRGx3obWalAqKGrdDNbrJYn_0eeyLLjNKI3168ukNBAgz8dBeCRrUSe-CepyiVznJA24UoCUQPyT0pvO3S0WJjqmKlvNwbpzOB2=w600'
              text='A Happy Accident'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://lh3.googleusercontent.com/eWNEpzTRzFRlg5rZokafTO6v5WajKJaXJe0kK5h6tQV6HhCo2Kq9rA-ULjml59IiJuzBU8M8BlxhylNREgNSvJWJp0MWwye-0ZXd_benZ37ZM4jLE_UxoJ09Sa3N-aVgm6SdFzG4=w600'
              text='My iPad Experience'
              label='Adventure'
              /*  path='/services' */ 
              path='posts/JkEo4MS2m6j555908A98'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Hello World'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adventure'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
