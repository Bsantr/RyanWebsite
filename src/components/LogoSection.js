import React, { useEffect, useState } from 'react';
import '../styles/LogoSection.css'; // Pfad zur CSS-Datei
import LogoSectionME from '../assets/LogoSectionME.png';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons

const words = ["Developer", "Student", "Friend"]; // Words to cycle through

const LogoSection = () => {
  const [introText, setIntroText] = useState('');
  const [introCompleted, setIntroCompleted] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const fullIntroText = "Welcome to my Page. I'm Ryan";

  useEffect(() => {
    if (!introCompleted) {
      if (introText.length < fullIntroText.length) {
        const timeoutId = setTimeout(() => {
          setIntroText(fullIntroText.slice(0, introText.length + 1));
        }, 150);
        return () => clearTimeout(timeoutId);
      } else {
        setIntroCompleted(true);
      }
    } else {
      const currentWord = words[wordIndex];
      
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayedText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        setTypingSpeed(150); // Normal typing speed
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        setTypingSpeed(75); // Faster deleting speed
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTypingSpeed(150); // Normal typing speed
      }

      const timeoutId = setTimeout(() => {
        setTypingSpeed(typingSpeed);
      }, typingSpeed);

      return () => clearTimeout(timeoutId);
    }
  }, [introText, introCompleted, charIndex, isDeleting, wordIndex, typingSpeed]);

  return (
    <section className="LogoSection relative">
      <div className="content-container relative z-10">
        <div className="left-content">
          <div className="banner-container">
            <img src={LogoSectionME} alt="Profile" className="banner-image" />
          </div>
        </div>
        <div className="center-content">
          <div className="logo-text-card centered-box">
            <div className="typing-animation" style={{ minHeight: '100px' }}>
              {introText}
            </div>
            {introCompleted && (
              <>
                <p className="profession-text">
                  I am a <strong>{displayedText}</strong>
                </p>
                <button className="more-button">Mehr über mich</button>
              </>
            )}
          </div>
          <div className="icon-group"> {/* Moved inside center-content and below logo-text-card */}
            <a href="mailto:your.email@example.com" className="icon-button" title="Mail">
              <FaEnvelope size={60} />
            </a>
            <a href="https://www.linkedin.com/in/your-profile" className="icon-button" title="LinkedIn">
              <FaLinkedin size={60} />
            </a>
            <a href="https://twitter.com/your-profile" className="icon-button" title="Twitter">
              <FaTwitter size={60} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
