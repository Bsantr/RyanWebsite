import React from 'react';
import '../styles/CalendarApp.css';
import calendarAbstract from '../assets/faceAbstract.png';
import calendarDetail1 from '../assets/FaceDetail1.png';
import calendarDetail2 from '../assets/FaceDetail1.png';
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

const CalendarApp = () => {
  return (
    <div className="project-page">
      <div className="header-section">
        <div className="project-header">
          <h1>Calendar App</h1>
          <p className="project-description">
            Stay organized and plan your schedule efficiently with this Calendar App. Features various views and reminders.
          </p>
          <div className="button-container">
            <a href="/path/to/download" className="btn">
              <img src={downloadIcon} alt="Download Icon" className="button-icon" />
              Download
            </a>
            <a href="https://github.com/your-repo" className="btn">
              <img src={githubIcon} alt="GitHub Icon" className="button-icon" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="images-section">
        <div className="left-column">
          <img src={calendarAbstract} alt="Calendar Abstract" className="abstract-image" />
          <p className="image-caption">Overview of the Calendar App</p>
        </div>
        <div className="right-column">
          <div className="detail-item">
            <img src={calendarDetail1} alt="Calendar Detail 1" className="detail-image" />
            <p className="image-caption">Calendar views and events</p>
          </div>
          <div className="detail-item">
            <img src={calendarDetail2} alt="Calendar Detail 2" className="detail-image" />
            <p className="image-caption">Reminders and notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
