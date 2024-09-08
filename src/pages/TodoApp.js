import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'; // React Modal für kleinere Bildschirme
import '../styles/FaceID.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPencilAlt, faCrosshairs } from '@fortawesome/free-solid-svg-icons'; // Verwende das Crosshairs-Icon
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // GitHub-Icon

// Korrektur des Pfads zu den PDFs
const samplePDF1 = `${process.env.PUBLIC_URL}/shooterGame.pdf`;
const samplePDF2 = `${process.env.PUBLIC_URL}/shooterGame2.pdf`;

Modal.setAppElement('#root'); // Für Accessibility

const ShooterGame = () => {
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
      {/* Großes Icon für Shooter Game */}
      <div className="large-icon">
        <FontAwesomeIcon icon={faCrosshairs} size="5x" />
      </div>
      <h2 className="section-title">Shooter Game</h2>
      <div className="text-box">
        <p>
          Experience the thrill of shooting and aiming in this mini shooter game. Sharpen your reflexes and master your aim!
        </p>
        <div className="button-group">
          <a href={samplePDF1} download className="btn">
            <FontAwesomeIcon icon={faDownload} className="button-icon" />
            Download
          </a>
          <a href="https://github.com/Bsantr/shootergame" className="btn">
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
              <FontAwesomeIcon icon={faCrosshairs} className="pdf-icon" />
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

export default ShooterGame;
