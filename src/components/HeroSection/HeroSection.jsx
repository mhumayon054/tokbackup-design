import React from 'react';
import './HeroSection.css'; 
import { Button } from '@mui/material'; 

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="heros">
        <h1 style={{fontSize:"30px"}}>Everything your <br /> <span className="highlight">social strategy needs</span> </h1>
        <p>TokBackup enhances social media insights with <br /> innovative features and adaptable solutions.</p>
        <div className='hero-button-cards'>
        <div className="hero-adjust">
            <button>Get Started for free</button>
        </div>
        </div>
      </div>
      </div>
      <div className="hero-image">
        <img src="src\assets\bucket.png" alt="Social media net" />
      </div>
    </div>
  );
}

export default HeroSection;
