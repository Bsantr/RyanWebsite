import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/FaceID.css'; // Verwende die gleiche CSS-Datei wie bei FaceID
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

// Korrektur des Pfads zu den PDFs
const samplePDF1 = `${process.env.PUBLIC_URL}/shooterGame.pdf`;
const samplePDF2 = `${process.env.PUBLIC_URL}/shootergame2.pdf`;

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
      <div className="pdf-container-wrapper">
        <div className="pdf-container" style={{ border: '1px solid #ccc' }}>
          <Document file={samplePDF1} className="pdf-document">
            <Page pageNumber={1} />
          </Document>
        </div>
        <div className="pdf-container" style={{ border: '1px solid #ccc' }}>
          <Document file={samplePDF2} className="pdf-document">
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default ShooterGame;
