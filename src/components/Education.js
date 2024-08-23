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
              <h3>Informatics Middle School IMS</h3>
              <p>08/2022 - Present</p>
              <p>Vocational Baccalaureate, Bern</p>
              <a href="https://www.bwdbern.ch" target="_blank" rel="noopener noreferrer" className="info-button">Info</a>
            </div>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="education-card" style={{ backgroundImage: `url(${NmsImage})` }}>
            <div className="overlay">
              <h3>IT Specialist EFZ</h3>
              <p>08/2022 - Present</p>
              <p>Application Development gibb & bbc, Bern</p>
              <a href="https://www.nmsbern.ch/" target="_blank" rel="noopener noreferrer" className="info-button">Info</a>
            </div>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="education-card" style={{ backgroundImage: `url(${ManuelImage})` }}>
            <div className="overlay">
              <h3>Secondary Level I</h3>
              <p>08/2019 - 07/2022</p>
              <p>Bodenacker Schoolhouse, Münchenbuchsee</p>
              <a href="https://kirchenfeld-schosshalde.ch/manuel" target="_blank" rel="noopener noreferrer" className="info-button">Info</a>
            </div>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="education-card" style={{ backgroundImage: `url(${KirchenfeldImage})` }}>
            <div className="overlay">
              <h3>Primary School</h3>
              <p>08/2014 - 07/2019</p>
              <p>Waldegg Schoolhouse, Münchenbuchsee</p>
              <a href="https://kirchenfeld-schosshalde.ch/kirchenfeld" target="_blank" rel="noopener noreferrer" className="info-button">Info</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
