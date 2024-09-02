import React from 'react';
import '../styles/FaceID.css'; // Importiert die angepasste CSS-Datei
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

// Korrektur des Pfads zum ersten PDF
const samplePDF1 = `${process.env.PUBLIC_URL}/faceID.pdf`;
// Korrektur des Pfads zum zweiten PDF
const samplePDF2 = `${process.env.PUBLIC_URL}/faceID2.pdf`; // Füge den Pfad zum zweiten PDF hinzu

const FaceID = () => {
  return (
    <div className="FaceIDSection">
      <h2 className="section-title">FaceID Recognition</h2>
      <div className="text-box">
        <p>
          Welcome to the FaceID Recognition project! This application uses advanced facial recognition technology to provide secure and seamless authentication.
        </p>
        <div className="button-group">
          <a href={samplePDF1} download className="btn">
            <img src={downloadIcon} alt="Download Icon" className="button-icon" />
            Download
          </a>
          <a href="https://github.com/PJR23/Facelogin-Calendar-App" className="btn">
            <img src={githubIcon} alt="GitHub Icon" className="button-icon" />
            GitHub
          </a>
        </div>
      </div>
      <div className="iframe-container-wrapper">
        <div className="iframe-container" style={{ border: '1px solid #ccc' }}>
          <iframe src={samplePDF1} title="First PDF" className="iframe-content"></iframe>
        </div>
        <div className="iframe-container" style={{ border: '1px solid #ccc' }}>
          <iframe src={samplePDF2} title="Second PDF" className="iframe-content"></iframe>
        </div>
      </div>
    </div>
  );
};

export default FaceID;
