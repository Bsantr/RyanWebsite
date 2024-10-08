import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Documents.css';

const DocumentsPage = () => {
  const [files, setFiles] = useState([]);
  const [loadingDownload, setLoadingDownload] = useState("");
  const [loadingPreview, setLoadingPreview] = useState("");
  const [loadingAll, setLoadingAll] = useState("");
  const [loadingPreviewAll, setLoadingPreviewAll] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPreviewUrl, setCurrentPreviewUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
      return;
    }

    const fetchFiles = async () => {
      try {
        const response = await fetch('https://nodejs-serverless-function-express-three-liart.vercel.app/api/fetch-files', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          navigate('/login');
        } else if (response.ok) {
          const data = await response.json();
          setFiles(data.files);
        } else {
          alert('Failed to fetch files');
        }
      } catch (error) {
        console.error('Error fetching files:', error);
        alert('An error occurred while fetching files. Please try again later.');
      }
    };

    fetchFiles();
  }, [navigate]);

  const handlePreview = async (fileName) => {
    setLoadingPreview(fileName);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`https://nodejs-serverless-function-express-three-liart.vercel.app/api/download-file?file=${fileName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setCurrentPreviewUrl(url);
        setModalOpen(true);
      } else {
        alert(`Failed to preview ${fileName}. Please check if the file exists on the server.`);
      }
    } catch (error) {
      console.error(`Error previewing ${fileName}:`, error);
      alert('An error occurred while previewing the file. Please try again later.');
    } finally {
      setLoadingPreview("");
    }
  };

  const handlePreviewAll = async () => {
    const fileName = "ryan_All.pdf";
    setLoadingPreviewAll(true);
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`https://nodejs-serverless-function-express-three-liart.vercel.app/api/download-file?file=${fileName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setCurrentPreviewUrl(url);
        setModalOpen(true);
      } else {
        alert('Failed to preview the "ryan_All.pdf" file.');
      }
    } catch (error) {
      console.error('Error previewing the "ryan_All.pdf" file:', error);
      alert('An error occurred while previewing the file. Please try again later.');
    } finally {
      setLoadingPreviewAll(false);
    }
  };

  const handleDownloadAll = async () => {
    const fileName = "ryan_All.pdf";
    setLoadingAll(true);
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`https://nodejs-serverless-function-express-three-liart.vercel.app/api/download-file?file=${fileName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        alert('Failed to download the "ryan_All.pdf" file.');
      }
    } catch (error) {
      console.error('Error downloading the "ryan_All.pdf" file:', error);
      alert('An error occurred while downloading the file. Please try again later.');
    } finally {
      setLoadingAll(false);
    }
  };

  const closePreview = () => {
    setModalOpen(false);
    setCurrentPreviewUrl("");
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleDownload = async (fileName) => {
    setLoadingDownload(fileName);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`https://nodejs-serverless-function-express-three-liart.vercel.app/api/download-file?file=${fileName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        alert(`Failed to download ${fileName}. Please check if the file exists on the server.`);
      }
    } catch (error) {
      console.error(`Error downloading ${fileName}:`, error);
      alert('An error occurred while downloading the file. Please try again later.');
    } finally {
      setLoadingDownload("");
    }
  };

  // Mapping file names to display names
  const displayNames = {
    "ryan_lebenslauf.pdf": "Resume",
    "ryan_NotenBWD.pdf": "BWD Grades",
    "ryan_NotenGIBB.pdf": "GIBB Grades",
    "ryan_Kursbestätigung.pdf": "Course Confirmation",
    "KNW187_bwd.pdf": "ÜK187",
    "KNW210_bwd.pdf": "ÜK210",
    "KNW106_bwd.pdf": "ÜK106",
    "KNW294_bwd.pdf": "ÜK294",
    "KNW295_bwd.pdf": "ÜK295",
    "KNW335_bwd.pdf": "ÜK335",
    "ryan_Abacus1.pdf": "Abacus Finance",
    "ryan_Abacus2.pdf": "Abacus Accounts Receivable",
    "ryan_Abacus3.pdf": "Abacus Accounts Payable"
  };

  const categories = {
    "bwd": ["ryan_lebenslauf.pdf", "ryan_NotenBWD.pdf"],
    "gibb": ["ryan_NotenGIBB.pdf", "ryan_Kursbestätigung.pdf"],
    "ÜK - Überbetriebliche Kurse": ["KNW187_bwd.pdf", "KNW210_bwd.pdf", "KNW106_bwd.pdf", "KNW294_bwd.pdf", "KNW295_bwd.pdf", "KNW335_bwd.pdf"],
    "certificates": ["ryan_Abacus1.pdf", "ryan_Abacus2.pdf", "ryan_Abacus3.pdf"]
  };

  const descriptions = {
    "ryan_lebenslauf.pdf": "My latest resume.",
    "ryan_NotenBWD.pdf": "My grades from semester 1-4.",
    "ryan_NotenGIBB.pdf": "My grades from semester 1-4.",
    "ryan_Kursbestätigung.pdf": "Other important documents.",
    "KNW187_bwd.pdf": "''ICT-Arbeitsplatz mit Betriebssystem in Betrieb nehmen.''",
    "KNW210_bwd.pdf": "''Public Cloud für Anwendungen nutzen''.",
    "KNW106_bwd.pdf": "''Datenbanken abfragen, bearbeiten und warten.''",
    "KNW294_bwd.pdf": "''Frontend einer interaktiven Webapplikation realisieren.''",
    "KNW295_bwd.pdf": "''Backend für Applikationen realisieren.''",
    "KNW335_bwd.pdf": "''Mobile-Applikation realisieren.''",
    "ryan_Abacus1.pdf": "''Abacus Finanzbuchhaltung.''",
    "ryan_Abacus2.pdf": "''Abacus Debitorenbuchhaltung.''",
    "ryan_Abacus3.pdf": "''Abacus Kreditorenbuchhaltung.''"
  };

  return (
    <div className="documents-container">
      <div className="header">
        <button className="btn-back" onClick={handleBack}>Back</button>
        <h1 className="documents-title">Documents</h1>
      </div>

      <div className="document-section centered">
        <div className="document-item">
          <h3>Download All</h3>
          <p>Download the document package as a single file.</p>
          <div className="button-group">
            <button
              onClick={handleDownloadAll}
              className={`btn-download ${loadingAll ? "loading" : ""}`}
              disabled={loadingAll || loadingDownload || loadingPreview || loadingPreviewAll}
            >
              {loadingAll ? <div className="spinner"></div> : <span className="btn-text">Download</span>}
            </button>
            <button
              onClick={handlePreviewAll}
              className={`btn-preview ${loadingPreviewAll ? "loading" : ""}`}
              disabled={loadingAll || loadingDownload || loadingPreview || loadingPreviewAll}
            >
              {loadingPreviewAll ? <div className="spinner"></div> : <span className="btn-text">Preview</span>}
            </button>
          </div>
        </div>
      </div>

      {Object.keys(categories).map((category) => (
        <div key={category} className="document-section">
          <h2>{category}</h2>
          <p>Here are important documents from {category === "ÜK" ? "ÜK" : category}.</p>
          <div className="document-card">
            {categories[category].map((file) => (
              <div key={file} className="document-item">
                <h3>{displayNames[file] || file.replace(".pdf", "")}</h3>
                <p>{descriptions[file]}</p>
                <div className="button-group">
                  <button
                    onClick={() => handleDownload(file)}
                    className={`btn-download ${loadingDownload === file ? "loading" : ""}`}
                    disabled={loadingDownload === file || loadingPreview === file || loadingAll || loadingPreviewAll}
                  >
                    {loadingDownload === file ? <div className="spinner"></div> : <span className="btn-text">Download</span>}
                  </button>
                  <button
                    className={`btn-preview ${loadingPreview === file ? "loading" : ""}`}
                    onClick={() => handlePreview(file)}
                    disabled={loadingDownload === file || loadingPreview === file || loadingAll || loadingPreviewAll}
                  >
                    {loadingPreview === file ? <div className="spinner"></div> : <span className="btn-text">Preview</span>}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {modalOpen && (
        <div className="modal" onClick={closePreview}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={currentPreviewUrl}
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
