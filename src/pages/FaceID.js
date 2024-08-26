import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/FaceID.css'; // Importiert die angepasste CSS-Datei
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

// Korrektur des Pfads zum ersten PDF
const samplePDF1 = `${process.env.PUBLIC_URL}/faceID.pdf`;
// Korrektur des Pfads zum zweiten PDF
const samplePDF2 = `${process.env.PUBLIC_URL}/faceID2.pdf`; // Füge den Pfad zum zweiten PDF hinzu

// Import the worker from pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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

export default FaceID;
