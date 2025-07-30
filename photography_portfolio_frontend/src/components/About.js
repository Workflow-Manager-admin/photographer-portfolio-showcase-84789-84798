import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm a passionate photographer with over 8 years of experience capturing 
              life's most precious moments. My journey began with a simple love for 
              storytelling through images, and has evolved into a career dedicated to 
              creating timeless photographs that speak to the heart.
            </p>
            <p>
              I specialize in wedding photography, portrait sessions, and lifestyle shoots. 
              My approach is natural and candid, focusing on authentic emotions and 
              genuine connections. Every photo session is unique, and I work closely 
              with my clients to ensure their vision comes to life.
            </p>
            <p>
              When I'm not behind the camera, you can find me exploring new locations, 
              experimenting with different techniques, or spending time with my family. 
              Photography isn't just my profession—it's my passion.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop" 
              alt="Photographer portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
