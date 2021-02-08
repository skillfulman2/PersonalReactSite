import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/space.mp4' autoPlay loop muted />
      <h1>WELCOME</h1>
      <p>Thank you for stopping by</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Projects
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
