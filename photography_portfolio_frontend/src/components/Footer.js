import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; 2024 PhotoFolio. All rights reserved.</p>
          </div>
          
          <div className="social-links">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              📷
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              📘
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              🐦
            </a>
            <a 
              href="mailto:contact@photofolio.com"
              aria-label="Email"
            >
              ✉️
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
