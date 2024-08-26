import React from 'react';
import '../styles/FaceID.css';
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
      <div className="content-section">
        <div className="pdf-container">
          <iframe
            src="./KNW294_bwd.pdf"
            className="pdf-viewer"
            title="PDF Viewer"
          />
        </div>
        <div className="images-container">
          <div className="image-item">
            <img src={faceDetail1} alt="Face Detail 1" className="detail-image" />
            <p className="image-caption">Detailed view of facial recognition algorithms</p>
          </div>
          <div className="image-item">
            <img src={faceDetail2} alt="Face Detail 2" className="detail-image" />
            <p className="image-caption">Security features of FaceID</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceID;
