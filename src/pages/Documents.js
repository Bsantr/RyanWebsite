import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Documents.css';

const DocumentsPage = () => {
  const [previewSrc, setPreviewSrc] = useState(null);
  const navigate = useNavigate(); // Hook für die Navigation

  const handlePreview = (src) => {
    setPreviewSrc(src);
  };

  const closePreview = () => {
    setPreviewSrc(null);
  };

  const handleBack = () => {
    navigate(-1); // Navigation zur vorherigen Seite
  };

  return (
    <div className="documents-container">
      <div className="header">
        <button className="btn-back" onClick={handleBack}>Back</button>
        <h1 className="documents-title">Documents</h1>
      </div>
      
      <div className="document-section">
        <div className="document-card">
          <div className="document-item">
            <h3>Download All</h3>
            <p>Download all documents in one package.</p>
            <div className="button-group">
              <a href="./ryan_All.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./ryan_All.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="document-section">
        <h2>bwd</h2>
        <p>Here are some important documents from BWD</p>
        <div className="document-card">
          <div className="document-item">
            <h3>Resume</h3>
            <p>My latest resume.</p>
            <div className="button-group">
              <a href="./ryan_lebenslauf.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./ryan_lebenslauf.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>BWD Grades</h3>
            <p>My grades from semster 1-4</p>
            <div className="button-group">
              <a href="./ryan_NotenBWD.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./ryan_NotenBWD.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="document-section">
        <h2>gibb</h2>
        <p>Here are some important documents from gibb</p>
        <div className="document-card">
          <div className="document-item">
            <h3>GIBB Grades</h3>
            <p>My grade from semster 1-6</p>
            <div className="button-group">
              <a href="./ryan_NotenGIBB.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./ryan_NotenGIBB.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>GIBB Documents</h3>
            <p>Other important documents</p>
            <div className="button-group">
              <a href="./ryan_Kursbestätigung.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./ryan_Kursbestätigung.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="document-section">
        <h2>ÜK - Überbetriebliche Kurse</h2>
        <p>Description or content related to ÜK.</p>
        <div className="document-card">
          <div className="document-item">
            <h3>ÜK 187</h3>
            <p>ICT-Arbeitsplatz mit Betriebssystem in Betrieb nehmen.</p>
            <div className="button-group">
              <a href="./KNW187_bwd.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./KNW187_bwd.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>ÜK 210</h3>
            <p>Public Cloud für Anwendungen nutzen.</p>
            <div className="button-group">
              <a href="./KNW210_bwd.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./KNW210_bwd.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>ÜK 106</h3>
            <p>Datenbanken abfragen, bearbeiten und warten.</p>
            <div className="button-group">
              <a href="./KNW106_bwd.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./KNW106_bwd.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>ÜK 294</h3>
            <p>Frontend einer interaktiven Webapplikation realisieren
            .</p>
            <div className="button-group">
              <a href="./KNW294_bwd.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./KNW294_bwd.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>ÜK 295</h3>
            <p>Backend für Applikationen realisieren.</p>
            <div className="button-group">
              <a href="./KNW295_bwd.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./KNW295_bwd.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>ÜK 335</h3>
            <p>Mobile-Applikation realisieren.</p>
            <div className="button-group">
              <a href="./KNW335_bwd.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./KNW335_bwd.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="document-section">
        <h2>Certificates</h2>
        <p>Description or content related to Certificates.</p>
        <div className="document-card">
          <div className="document-item">
            <h3>Abacus 1</h3>
            <p>Abacus Finanzbuchhaltung.</p>
            <div className="button-group">
              <a href="./ryan_Abacus1.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./ryan_Abacus1.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>Abacus 2</h3>
            <p>Abacus Debitorenbuchhaltung.</p>
            <div className="button-group">
              <a href="./ryan_Abacus2.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./ryan_Abacus2.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>Abacus 3</h3>
            <p>Abacus Kreditorenbuchhaltung.</p>
            <div className="button-group">
              <a href="./ryan_Abacus3.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./ryan_Abacus3.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      {previewSrc && (
        <div className="modal" onClick={closePreview}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe 
              src={previewSrc} 
              title="Document Preview"
              width="100%" 
              height="500px" 
            ></iframe>
            <button className="btn-close" onClick={closePreview}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentsPage;
