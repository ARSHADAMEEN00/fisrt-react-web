import React from "react";
import "./Herosection.css";
import home from './img-home.jpg'

function HeroSection() {

  

  return (
    <div className="hero-container container-fliud"  styles={{ backgroundImage:`url(${home})` }} >
      <video src="/video/video-1.mp4" autoPlay loop muted /> 
      <h1 className='header' >Welcome to Kerala Tourism</h1>
      <p> what are you waiting for </p>
      <div className="hero-btn">
        <button className="btnG">Get Started</button>
        <button className="btnW">
          Watch trailer <i className="far fa-play-circle"></i>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
