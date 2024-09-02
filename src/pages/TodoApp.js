import React from 'react';
import '../styles/FaceID.css'; // Verwende dieselbe CSS-Datei wie bei den anderen Apps
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

// Korrektur des Pfads zu den PDFs
const samplePDF1 = `${process.env.PUBLIC_URL}/shooterGame.pdf`;
const samplePDF2 = `${process.env.PUBLIC_URL}/shooterGame2.pdf`;

const TodoApp = () => {
  return (
    <div className="FaceIDSection">
      <h2 className="section-title">Todo App</h2>
      <div className="text-box">
        <p>
          Manage your tasks efficiently with this Todo application. Stay organized and keep track of your progress.
        </p>
        <div className="button-group">
          <a href={samplePDF1} download className="btn">
            <img src={downloadIcon} alt="Download Icon" className="button-icon" />
            Download
          </a>
          <a href="https://github.com/Bsantr/shootergame/tree/32929dd6c865f86a0507ba90c046cce163c1ed35/ShooterGame" className="btn">
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

export default TodoApp;
