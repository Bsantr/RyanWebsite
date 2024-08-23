import React from 'react';
import '../styles/Education.css'; // Ensure the path is correct
import KirchenfeldImage from '../assets/kirchenfeld.jpg';
import ManuelImage from '../assets/manuel.jpg';
import NmsImage from '../assets/nms.jpg';
import BwdImage from '../assets/bwd.jpg';

const Education = () => {
  return (
    <section id='education' className="Education">
      <div className="education-header">
        <h2>Education</h2>
      </div>
      <div className="timeline">
        <div className="timeline-item left">
          <div className="education-card" style={{ backgroundImage: `url(${BwdImage})` }}>
            <div className="overlay">
              <h3>BWD IMS</h3>
              <p>08/2022 - Present</p>
              <p>Wankdorf, Bern</p>
              <a href="https://www.bwdbern.ch" target="_blank" rel="noopener noreferrer" className="info-button">Info</a>
            </div>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="education-card" style={{ backgroundImage: `url(${NmsImage})` }}>
            <div className="overlay">
              <h3>NMS Bern</h3>
              <p> 08/2020 - 07/2022 </p>
              <p>Waisenhausplatz, Bern</p>
              <a href="https://www.nmsbern.ch/" target="_blank" rel="noopener noreferrer" className="info-button">Info</a>
            </div>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="education-card" style={{ backgroundImage: `url(${ManuelImage})` }}>
            <div className="overlay">
              <h3>Secondary school Manuel</h3>
              <p>08/2019 - 07/2020</p>
              <p>Mülinenstrasse, Bern</p>
              <a href="https://kirchenfeld-schosshalde.ch/manuel" target="_blank" rel="noopener noreferrer" className="info-button">Info</a>
            </div>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="education-card" style={{ backgroundImage: `url(${KirchenfeldImage})` }}>
            <div className="overlay">
              <h3>Primary Kirchenfeld </h3>
              <p>08/2012 - 07/2018</p>
              <p>Aegertenstrasse, Bern </p>
              <a href="https://kirchenfeld-schosshalde.ch/kirchenfeld" target="_blank" rel="noopener noreferrer" className="info-button">Info</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
