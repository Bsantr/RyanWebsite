import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import LogoSection from './components/LogoSection';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills'; 
import MyWork from './components/MyWork';
import FaceID from './pages/FaceID';
import CalendarApp from './pages/CalendarApp';
import SnakeGame from './pages/SnakeGame';
import LearningApp from './pages/LearningApp';
import TodoApp from './pages/TodoApp';
import ShooterGame from './pages/ShooterGame';
import LoginPage from './pages/LoginPage';
import Documents from './pages/Documents'; // Assuming this is your Documents page
import Footer from './components/Footer'; 
import './styles/App.css';

const Home = () => {
  useEffect(() => {
    const fadeIns = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
      fadeIns.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          element.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div className="fade-in">
        <LogoSection />
      </div>
      <div className="fade-in">
        <AboutMe />
      </div>
      <div className="fade-in">
        <Education />
      </div>
      <div className="fade-in">
        <MyWork />
      </div>
      <div className="fade-in">
        <Skills />
      </div>
    </>
  );
};

const ProjectLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('mywork').scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <div>
      <button onClick={handleBackClick} className="back-button">
        &larr; Back
      </button>
      {children}
    </div>
  );
};
// jhdjkwhfdsw
const App = () => {
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faceid" element={<ProjectLayout><FaceID /></ProjectLayout>} />
        <Route path="/calendarapp" element={<ProjectLayout><CalendarApp /></ProjectLayout>} />
        <Route path="/snakegame" element={<ProjectLayout><SnakeGame /></ProjectLayout>} />
        <Route path="/learningapp" element={<ProjectLayout><LearningApp /></ProjectLayout>} />
        <Route path="/todoapp" element={<ProjectLayout><TodoApp /></ProjectLayout>} />
        <Route path="/shootergame" element={<ProjectLayout><ShooterGame /></ProjectLayout>} />
        <Route path="/login" element={<ProjectLayout><LoginPage /></ProjectLayout>} />
        <Route path="/documents" element={<ProjectLayout><Documents /></ProjectLayout>} /> {/* Added Documents route */}
      </Routes>
      {/* Footer only visible if the path is not '/login' and not '/documents' */}
      {location.pathname !== '/login' && location.pathname !== '/documents' && <Footer />}
    </div>
  );
};

export default App;
