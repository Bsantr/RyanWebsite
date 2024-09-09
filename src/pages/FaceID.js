import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'; // React Modal für kleinere Bildschirme
import '../styles/FaceID.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPencilAlt, faCamera, faUserLock } from '@fortawesome/free-solid-svg-icons'; // Verwende das Gesicht-Icon
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // GitHub-Icon

// Korrektur des Pfads zu den PDFs
const samplePDF1 = `${process.env.PUBLIC_URL}/FaceID.pdf`;
const samplePDF2 = `${process.env.PUBLIC_URL}/faceID2.pdf`;

Modal.setAppElement('#root'); // Für Accessibility

const FaceID = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activePDF, setActivePDF] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Überwache die Bildschirmgröße, um zwischen groß und klein zu wechseln
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Setze die Breite für mobile Ansicht auf 768px oder weniger
    };

    handleResize(); // Initialer Check
    window.addEventListener('resize', handleResize); // Füge Listener hinzu

    return () => {
      window.removeEventListener('resize', handleResize); // Entferne Listener bei Komponentenausblendung
    };
  }, []);

  const openModal = (pdf) => {
    setActivePDF(pdf);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="FaceIDSection">
      {/* Großes Icon für FaceID */}
      <div className="large-icon">
        <FontAwesomeIcon icon={faUserLock} size="5x" />
      </div>
      <h2 className="section-title">FaceID Recognition</h2>
      <div className="text-box">
        <p>
          Welcome to the FaceID Recognition project! This application uses advanced facial recognition technology to provide secure and seamless authentication.
        </p>
        <div className="button-group">
          <a href={samplePDF1} download className="btn">
            <FontAwesomeIcon icon={faDownload} className="button-icon" />
            Download
          </a>
          <a href="https://github.com/PJR23/Facelogin-Calendar-App" className="btn">
            <FontAwesomeIcon icon={faGithub} className="button-icon" />
            GitHub
          </a>
        </div>
      </div>

      <div className="button-group">
        {isMobile ? (
          <>
            {/* Mobile Ansicht: Zeige Button an, der ein Modal öffnet */}
            <button className="btn" onClick={() => openModal(samplePDF1)}>
              <FontAwesomeIcon icon={faPencilAlt} className="pdf-icon" />
              <span className="btn-text">View PDF 1</span>
            </button>
            <button className="btn" onClick={() => openModal(samplePDF2)}>
              <FontAwesomeIcon icon={faCamera} className="pdf-icon" />
              <span className="btn-text">View PDF 2</span>
            </button>
          </>
        ) : (
          <div className="iframe-container-wrapper">
            <div className="iframe-container" style={{ border: '1px solid #ccc' }}>
              <iframe src={samplePDF1} title="First PDF" className="iframe-content"></iframe>
            </div>
            <div className="iframe-container" style={{ border: '1px solid #ccc' }}>
              <iframe src={samplePDF2} title="Second PDF" className="iframe-content"></iframe>
            </div>
          </div>
        )}
      </div>

      {/* Modal für mobile Ansicht */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="PDF Preview"
        className="pdf-modal"
        overlayClassName="pdf-modal-overlay"
      >
        <button onClick={closeModal} className="close-btn">Close</button>
        <iframe src={activePDF} title="PDF Preview" className="iframe-content"></iframe>
      </Modal>
    </div>
  );
};

export default FaceID;
