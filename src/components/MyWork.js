import React, { useState, useEffect, useRef } from 'react';
import '../styles/MyWork.css'; // Pfad zur CSS-Datei
import faceIDImage from '../assets/faceid.jpg';
import calendarAppImage from '../assets/Kalender.png';
import snakeGameImage from '../assets/snakegame.png';
import learningAppImage from '../assets/learningApp.png';
import todoAppImage from '../assets/todoApp.png';
import { useNavigate } from 'react-router-dom';

const projects = [
  { title: 'FaceID', description: 'A project for facial recognition technology.', image: faceIDImage, path: '/faceid' },
  { title: 'StudyPal', description: 'App for various learning modules.', image: learningAppImage, path: '/learningapp' },
  { title: 'Snake Game', description: 'A fun and engaging snake game.', image: snakeGameImage, path: '/snakegame' },
  { title: 'First Website', description: 'My first self made project.', image: calendarAppImage, path: '/calendarapp' },
  { title: 'Shooter Game', description: 'A simple single player shooter game.', image: todoAppImage, path: '/todoapp' },
];

const MyWork = () => {
  const [currentIndex, setCurrentIndex] = useState(projects.length);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const itemWidth = 300;
  const itemMargin = 20;
  const totalItems = projects.length * 3; // Total items after duplication

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile && carouselRef.current) {
      const transitionEnd = () => {
        setIsAnimating(false);
        if (currentIndex >= totalItems - projects.length) {
          carouselRef.current.style.transition = 'none';
          setCurrentIndex(projects.length);
          carouselRef.current.style.transform = `translateX(-${(itemWidth + itemMargin) * projects.length}px)`;
        } else if (currentIndex <= 0) {
          carouselRef.current.style.transition = 'none';
          setCurrentIndex(totalItems - 2 * projects.length);
          carouselRef.current.style.transform = `translateX(-${(itemWidth + itemMargin) * (totalItems - 2 * projects.length)}px)`;
        }
      };

      const offset = -currentIndex * (itemWidth + itemMargin);
      carouselRef.current.style.transition = 'transform 0.6s ease'; // Slightly longer for more smoothness
      carouselRef.current.style.transform = `translateX(${offset}px)`;

      carouselRef.current.addEventListener('transitionend', transitionEnd);

      return () => {
        if (carouselRef.current) {
          carouselRef.current.removeEventListener('transitionend', transitionEnd);
        }
      };
    }
  }, [currentIndex, isMobile]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  const infiniteProjects = [...projects, ...projects, ...projects];

  return (
    <section id="mywork" className="WorkSection">
      <h2>My Work</h2>
      <div className="work-intro-box">
        <p className="work-intro">
          This is a collection of some of my most recent projects that highlight my skills and creativity.
          It ranges from a facial recognition system to practical tools like a learning app.
        </p>
      </div>
      {!isMobile ? (
        <div className="work-carousel">
          <button className="carousel-button left" onClick={handlePrev} disabled={isAnimating}>
            &larr;
          </button>
          <div className="work-carousel-inner" ref={carouselRef} style={{ display: 'flex', transition: 'transform 0.6s ease' }}>
            {infiniteProjects.map((project, index) => (
              <div
                key={index}
                className="work-item"
                style={{ flexShrink: 0, width: itemWidth, margin: `0 ${itemMargin / 2}px` }}
                onClick={() => handleCardClick(project.path)}
              >
                <img src={project.image} alt={project.title} />
                <div className="work-text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-button right" onClick={handleNext} disabled={isAnimating}>
            &rarr;
          </button>
        </div>
      ) : (
        <div className="show-all">
          {projects.map((project, index) => (
            <div
              key={index}
              className="work-item"
              onClick={() => handleCardClick(project.path)}
            >
              <img src={project.image} alt={project.title} />
              <div className="work-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyWork;
