import React from 'react';
import '../App.css';
import { Button } from './Buttons';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
              <h1>ADVENTURE AWAITS</h1>
            <p>What are you Waiting for?</p>
            <div className="hero-btns">
                <Button className='btns'
                 buttonStyLe='btn--outline'
                 buttonSize='btn--large'> 
                 GET STARTED</Button>
                <Button className='btns'
                 buttonStyLe="btn--primary"
                  buttonSize="btn--large">
                      WATCH TRAILER <i className='far fa-play-circle'/></Button>
            </div>
        </div>
    )
}

export default HeroSection;
