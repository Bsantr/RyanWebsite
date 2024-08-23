import React from 'react';
import '../styles/SnakeGame.css';
import snakeAbstract from '../assets/faceAbstract.png';
import snakeDetail1 from '../assets/FaceDetail1.png';
import snakeDetail2 from '../assets/FaceDetail1.png';
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

const SnakeGame = () => {
  return (
    <div className="project-page">
      <div className="header-section">
        <div className="project-header">
          <h1>Snake Game</h1>
          <p className="project-description">
            Explore the classic Snake Game with modern twists. This game challenges your reflexes and strategic thinking.
          </p>
          <div className="button-container">
            <a href="/path/to/download" className="btn">
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
          <img src={snakeAbstract} alt="Snake Abstract" className="abstract-image" />
          <p className="image-caption">Overview of the Snake Game</p>
        </div>
        <div className="right-column">
          <div className="detail-item">
            <img src={snakeDetail1} alt="Snake Detail 1" className="detail-image" />
            <p className="image-caption">Gameplay interface</p>
          </div>
          <div className="detail-item">
            <img src={snakeDetail2} alt="Snake Detail 2" className="detail-image" />
            <p className="image-caption">Score and level system</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
