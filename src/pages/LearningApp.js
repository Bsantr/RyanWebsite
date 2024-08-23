import React from 'react';
import '../styles/LearningApp.css';
import learningAbstract from '../assets/faceAbstract.png';
import learningDetail1 from '../assets/FaceDetail1.png';
import learningDetail2 from '../assets/FaceDetail1.png';
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

const LearningApp = () => {
  return (
    <div className="project-page">
      <div className="header-section">
        <div className="project-header">
          <h1>Learning App</h1>
          <p className="project-description">
            Enhance your knowledge with this interactive Learning App. Explore various educational features and tools.
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
          <img src={learningAbstract} alt="Learning Abstract" className="abstract-image" />
          <p className="image-caption">Overview of the Learning App</p>
        </div>
        <div className="right-column">
          <div className="detail-item">
            <img src={learningDetail1} alt="Learning Detail 1" className="detail-image" />
            <p className="image-caption">Learning modules and interface</p>
          </div>
          <div className="detail-item">
            <img src={learningDetail2} alt="Learning Detail 2" className="detail-image" />
            <p className="image-caption">Educational resources and tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningApp;
