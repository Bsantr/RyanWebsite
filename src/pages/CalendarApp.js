import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/FaceID.css'; // Verwende dieselbe CSS-Datei wie bei FaceID
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

// Korrektur des Pfads zu den PDFs
const samplePDF1 = `${process.env.PUBLIC_URL}/firstWebsite.pdf`;
const samplePDF2 = `${process.env.PUBLIC_URL}/firstWebsite2.pdf`;

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CalendarApp = () => {
  return (
    <div className="FaceIDSection">
      <h2 className="section-title">Calendar App</h2>
      <div className="text-box">
        <p>
          Stay organized and plan your schedule efficiently with this Calendar App. Features various views and reminders.
        </p>
        <div className="button-group">
          <a href={samplePDF1} download className="btn">
            <img src={downloadIcon} alt="Download Icon" className="button-icon" />
            Download
          </a>
          <a href="https://github.com/Bsantr/FirstWebsite.git" className="btn">
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

export default CalendarApp;
