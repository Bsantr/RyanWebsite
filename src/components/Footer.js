import React, { useState } from 'react';
import '../styles/Footer.css';
import ImpressumPopup from './ImpressumPopup';

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => setIsPopupOpen(true);
  const handlePopupClose = () => setIsPopupOpen(false);

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>About</h3>
          <button onClick={handlePopupOpen} className="about-button">
            Impressum
          </button>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: contact@ryanvonmay.com</p>
          <p>Email (privat): ryanvonmay@gmx.ch</p>
          
        </div>
        <div className="footer-column">
          <h3>Check me out!</h3>
          <p><a href="https://ch.linkedin.com/">LinkedIn</a></p>
          <p><a href="https://www.twitter.com">Twitter</a></p>
          <p><a href="https://www.instagram.com/__ryan__vm/">Instagram</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ryan Santos von May. All rights reserved.</p>
      </div>
      <ImpressumPopup isOpen={isPopupOpen} onClose={handlePopupClose} />
    </footer>
  );
};

export default Footer;
