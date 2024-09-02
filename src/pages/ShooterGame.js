import React from 'react';
import '../styles/FaceID.css'; // Verwende die gleiche CSS-Datei wie bei FaceID
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

// Korrektur des Pfads zu den PDFs
const samplePDF1 = `${process.env.PUBLIC_URL}/shooterGame.pdf`;
const samplePDF2 = `${process.env.PUBLIC_URL}/shootergame2.pdf`;

const ShooterGame = () => {
  return (
    <div className="FaceIDSection">
      <h2 className="section-title">Shooter Game</h2>
      <div className="text-box">
        <p>
          Experience the thrill of fast-paced shooting action in this engaging Shooter Game. Test your skills and reflexes.
        </p>
        <div className="button-group">
          <a href={samplePDF1} download className="btn">
            <img src={downloadIcon} alt="Download Icon" className="button-icon" />
            Download
          </a>
          <a href="https://github.com/your-repo" className="btn">
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

export default ShooterGame;
