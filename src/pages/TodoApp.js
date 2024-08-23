import React from 'react';
import '../styles/TodoApp.css';
import todoAbstract from '../assets/faceAbstract.png';
import todoDetail1 from '../assets/FaceDetail1.png'
import todoDetail2 from '../assets/FaceDetail1.png';
import downloadIcon from '../assets/download.png';
import githubIcon from '../assets/github.png';

const TodoApp = () => {
  return (
    <div className="project-page">
      <div className="header-section">
        <div className="project-header">
          <h1>Todo App</h1>
          <p className="project-description">
            Manage your tasks efficiently with this Todo application. Stay organized and keep track of your progress.
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
          <img src={todoAbstract} alt="Todo Abstract" className="abstract-image" />
          <p className="image-caption">Overview of the Todo App</p>
        </div>
        <div className="right-column">
          <div className="detail-item">
            <img src={todoDetail1} alt="Todo Detail 1" className="detail-image" />
            <p className="image-caption">Task management interface</p>
          </div>
          <div className="detail-item">
            <img src={todoDetail2} alt="Todo Detail 2" className="detail-image" />
            <p className="image-caption">Task organization and filters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
