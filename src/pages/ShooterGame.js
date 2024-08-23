import React from 'react';
import '../styles/ShooterGame.css';
import shooterAbstract from '../assets/faceAbstract.png';
import shooterDetail1 from '../assets/FaceDetail1.png';
import shooterDetail2 from '../assets/FaceDetail1.png';
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

const ShooterGame = () => {
  return (
    <div className="project-page">
      <div className="header-section">
        <div className="project-header">
          <h1>Shooter Game</h1>
          <p className="project-description">
            Experience the thrill of fast-paced shooting action in this engaging Shooter Game. Test your skills and reflexes.
          </p>
          <div className="button-container">
            <a href="/path/to/download"a className="btn">
              <img src={downloadIcon} alt="Download Icon" className="button-icon" />
              Download
            </a>
            <a href="https://github.com/your-repo" className="btn">
              <img src={githubIcon} alt="GitHub Icon" className="button-icon" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="images-section">
        <div className="left-column">
          <img src={shooterAbstract} alt="Shooter Abstract" className="abstract-image" />
          <p className="image-caption">Overview of the Shooter Game</p>
        </div>
        <div className="right-column">
          <div className="detail-item">
            <img src={shooterDetail1} alt="Shooter Detail 1" className="detail-image" />
            <p className="image-caption">Gameplay mechanics and controls</p>
          </div>
          <div className="detail-item">
            <img src={shooterDetail2} alt="Shooter Detail 2" className="detail-image" />
            <p className="image-caption">Enemy AI and levels</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShooterGame;
