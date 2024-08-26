import React, { useState } from 'react';
import '../styles/Header.css';
import LogoImage from '../assets/LogoImage.png'; // Adjust the path to the logo image

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page
  };

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close the menu after navigation
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div
          className="logo"
          onClick={handleScrollToTop} // Updated to scroll to the top of the page
          style={{ cursor: 'pointer' }}
        >
          <img src={LogoImage} alt="Logo" /> {/* Adjust the path to your image */}
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={menuOpen ? "burger open" : "burger"}></div>
        </div>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><a href="#aboutme" onClick={() => handleScrollToSection('aboutme')}>About Me</a></li>
          <li><a href="#education" onClick={() => handleScrollToSection('education')}>Education</a></li>
          <li><a href="#mywork" onClick={() => handleScrollToSection('mywork')}>My Work</a></li>
          <li><a href="#skills" onClick={() => handleScrollToSection('skills')}>Skills</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
