import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Capturing Life's Beautiful Moments</h1>
          <p>
            Professional photographer specializing in portraits, weddings, and lifestyle photography. 
            Every moment tells a story, and I'm here to help you tell yours.
          </p>
          <div className="hero-cta">
            <a href="#gallery" className="btn btn-large">View My Work</a>
            <a href="#contact" className="btn btn-outline btn-large">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
