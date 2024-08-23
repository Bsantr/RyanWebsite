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
              <a href="./all_documents.zip" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./all_documents_preview.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="document-section">
        <h2>bwd</h2>
        <p>Description or content related to BWD.</p>
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
            <h3>Cover Letter</h3>
            <p>A cover letter for job applications.</p>
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
        </div>
      </div>

      <div className="document-section">
        <h2>gibb</h2>
        <p>Description or content related to GIBB.</p>
        <div className="document-card">
          <div className="document-item">
            <h3>GIBB Document 1</h3>
            <p>Description or content related to GIBB Document 1.</p>
            <div className="button-group">
              <a href="./gibb_doc1.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./gibb_doc1.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>GIBB Document 2</h3>
            <p>Description or content related to GIBB Document 2.</p>
            <div className="button-group">
              <a href="./gibb_doc2.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./gibb_doc2.pdf')}
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
            <h3>ÜK 1</h3>
            <p>Description or content related to ÜK 1.</p>
            <div className="button-group">
              <a href="./uek1.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./uek1.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>ÜK 2</h3>
            <p>Description or content related to ÜK 2.</p>
            <div className="button-group">
              <a href="./uek2.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./uek2.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>ÜK 3</h3>
            <p>Description or content related to ÜK 3.</p>
            <div className="button-group">
              <a href="./uek3.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./uek3.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>ÜK 4</h3>
            <p>Description or content related to ÜK 4.</p>
            <div className="button-group">
              <a href="./uek4.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./uek4.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>ÜK 5</h3>
            <p>Description or content related to ÜK 5.</p>
            <div className="button-group">
              <a href="./uek5.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./uek5.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>ÜK 6</h3>
            <p>Description or content related to ÜK 6.</p>
            <div className="button-group">
              <a href="./uek6.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./uek6.pdf')}
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
            <h3>Certificate 1</h3>
            <p>Description or content related to Certificate 1.</p>
            <div className="button-group">
              <a href="./certificate1.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./certificate1.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>Certificate 2</h3>
            <p>Description or content related to Certificate 2.</p>
            <div className="button-group">
              <a href="./certificate2.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./certificate2.pdf')}
              >
                Preview
              </button>
            </div>
          </div>
          <div className="document-item">
            <h3>Certificate 3</h3>
            <p>Description or content related to Certificate 3.</p>
            <div className="button-group">
              <a href="./certificate3.pdf" className="btn-download" download>Download</a>
              <button 
                className="btn-preview" 
                onClick={() => handlePreview('./certificate3.pdf')}
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
