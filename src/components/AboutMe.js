import React from 'react';
import '../styles/AboutMe.css'; // Sicherstellen, dass der Pfad korrekt ist
import IntroImage from '../assets/bwd.jpg';
import JourneyImage from '../assets/bwd.jpg';
import HobbiesImage from '../assets/bwd.jpg';
import VisionImage from '../assets/bwd.jpg';
const AboutMe = () => {
  return (
    <section id='aboutme' className="AboutMe">
      <div className="about-me-header">
        <h2>About Me</h2>
      </div>
      <div className="about-me-wrapper">
        
        <div className="about-me-container">
          <div className="about-me-section">
            <div className="about-me-content">
              <div className="about-me-image right-image">
                <img src={IntroImage} alt="Introduction" />
              </div>
              <div className="about-me-text">
                <p><strong>Introduction</strong></p>
                <p>Hi, I'm Ryan Santos, born in May 2005 in Brazil. I currently live in Switzerland, where I've completed my entire school journey. I'm a creative, active, and happy person who enjoys a wide range of activities and quickly develops a fascination for new things.</p>
              </div>
            </div>
          </div>

          <div className="about-me-section">
            <div className="about-me-content reverse">
              <div className="about-me-image left-image">
                <img src={JourneyImage} alt="My Journey with Programming" />
              </div>
              <div className="about-me-text">
                <p><strong>My Journey with Programming</strong></p>
                <p>I've always had a keen interest in technology. I've experimented with phone apps to learn development and come from a family with a background in computer science. I wanted to explore something different and find a future career that excites me.</p>
              </div>
            </div>
          </div>

          <div className="about-me-section">
            <div className="about-me-content">
              <div className="about-me-image right-image">
                <img src={HobbiesImage} alt="Hobbies and Activities" />
              </div>
              <div className="about-me-text">
                <p><strong>Hobbies and Activities</strong></p>
                <p>I love sports, particularly fitness, football, and basketball. I enjoy going on adventures with friends and traveling with my family or friends is my favorite activity.</p>
              </div>
            </div>
          </div>

          <div className="about-me-section">
            <div className="about-me-content reverse">
              <div className="about-me-image left-image">
                <img src={VisionImage} alt="Vision for the Future" />
              </div>
              <div className="about-me-text">
                <p><strong>Vision for the Future</strong></p>
                <p>Looking ahead, I aspire to work in a position where I feel comfortable and can contribute meaningfully. I aim to work on exciting projects that benefit the company and its customers.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
