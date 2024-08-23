import React from 'react';
import '../styles/FaceID.css';
import faceAbstract from '../assets/faceAbstract.png';
import faceDetail1 from '../assets/FaceDetail1.png';
import faceDetail2 from '../assets/faceDetail2.png';
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

const FaceID = () => {
  return (
    <div className="project-page">
      <div className="header-section">
        <div className="project-header">
          <h1>FaceID Recognition</h1>
          <p className="project-description">
            Welcome to the FaceID Recognition project! This application uses advanced facial recognition technology to provide secure and seamless authentication.
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
          <img src={faceAbstract} alt="Face Abstract" className="abstract-image" />
          <p className="image-caption">Overview of FaceID Technology</p>
        </div>
        <div className="right-column">
          <div className="detail-item">
            <img src={faceDetail1} alt="Face Detail 1" className="detail-image" />
            <p className="image-caption">Detailed view of facial recognition algorithms</p>
          </div>
          <div className="detail-item">
            <img src={faceDetail2} alt="Face Detail 2" className="detail-image" />
            <p className="image-caption">Security features of FaceID</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceID;
