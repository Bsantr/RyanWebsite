import React from 'react';
import '../styles/FaceID.css'; // Verwende dieselbe CSS-Datei wie bei FaceID
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

// Korrektur des Pfads zu den PDFs
const samplePDF1 = `${process.env.PUBLIC_URL}/SnakeGame.pdf`;
const samplePDF2 = `${process.env.PUBLIC_URL}/SnakeGame2.pdf`;

const SnakeGame = () => {
  return (
    <div className="FaceIDSection">
      <h2 className="section-title">Snake Game</h2>
      <div className="text-box">
        <p>
          Explore the classic Snake Game with modern twists. This game challenges your reflexes and strategic thinking.
        </p>
        <div className="button-group">
          <a href={samplePDF1} download className="btn">
            <img src={downloadIcon} alt="Download Icon" className="button-icon" />
            Download
          </a>
          <a href="https://github.com/Bsantr/SnakeGame.git" className="btn">
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

export default SnakeGame;
