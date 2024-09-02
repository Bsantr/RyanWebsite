import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faPhp, faJava, faPython, faNodeJs, faGit, faDocker, faAws, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faServer, faCodeBranch, faDatabase, faLaptopCode, faTools, faCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/Skills.css';

const Skills = () => {
  const [openSkill, setOpenSkill] = useState(null);

  const toggleSkill = (skill) => {
    setOpenSkill(openSkill === skill ? null : skill);
  };

  const averageKnowledge = {
    'frontend': 76,
    'backend': 65,
    'database': 79,
    'tools': 67,
  };

  const skillTexts = {
    'frontend': 'My front-end skills include HTML, CSS, and JavaScript, with a focus on building responsive and interactive user interfaces. I’m also skilled in using modern frameworks like React for dynamic web applications.',
    'backend': 'I have experience in development with PHP, Java, Python, Node.js, and some C#.',
    'database': 'I am able to manage databases like MariaDB, MongoDB, Redis, MySQL, and SQLite, and I can design and optimize schemas and queries.',
    'tools': 'I am skilled in using tools and technologies like Git for version control and Docker for containers. Experienced with cloud services such as AWS, Kubernetes, and Azure and more.',
  };

  const skillData = {
    'frontend': [
      { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} size="2x" />, proficiency: '85%' },
      { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} size="2x" />, proficiency: '80%' },
      { name: 'React', icon: <FontAwesomeIcon icon={faReact} size="2x" />, proficiency: '75%' },
      { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJsSquare} size="2x" />, proficiency: '65%' },
    ],
    'backend': [
      { name: 'C#', icon: <FontAwesomeIcon icon={faCodeBranch} size="2x" />, proficiency: '70%' },
      { name: 'Java', icon: <FontAwesomeIcon icon={faJava} size="2x" />, proficiency: '65%' },
      { name: 'Python', icon: <FontAwesomeIcon icon={faPython} size="2x" />, proficiency: '65%' },
      { name: 'PHP', icon: <FontAwesomeIcon icon={faPhp} size="2x" />, proficiency: '60%' },
      { name: 'Node.js', icon: <FontAwesomeIcon icon={faNodeJs} size="2x" />, proficiency: '60%' },
    ],
    'database': [
      { name: 'MySQL', icon: <FontAwesomeIcon icon={faDatabase} size="2x" />, proficiency: '85%' },
      { name: 'SQLite', icon: <FontAwesomeIcon icon={faDatabase} size="2x" />, proficiency: '85%' },
      { name: 'MongoDB', icon: <FontAwesomeIcon icon={faDatabase} size="2x" />, proficiency: '80%' },
      { name: 'MariaDB', icon: <FontAwesomeIcon icon={faDatabase} size="2x" />, proficiency: '75%' },
      { name: 'Redis', icon: <FontAwesomeIcon icon={faDatabase} size="2x" />, proficiency: '70%' },
    ],
    'tools': [
      { name: 'Git', icon: <FontAwesomeIcon icon={faGit} size="2x" />, proficiency: '80%' },
      { name: 'Docker', icon: <FontAwesomeIcon icon={faDocker} size="2x" />, proficiency: '80%' },
      { name: 'AWS', icon: <FontAwesomeIcon icon={faAws} size="2x" />, proficiency: '70%' },
      { name: 'Kubernetes', icon: <FontAwesomeIcon icon={faServer} size="2x" />, proficiency: '65%' },
      { name: 'CI/CD', icon: <FontAwesomeIcon icon={faServer} size="2x" />, proficiency: '65%' },
      { name: 'Azure', icon: <FontAwesomeIcon icon={faMicrosoft} size="2x" />, proficiency: '60%' },
      { name: 'Terraform', icon: <FontAwesomeIcon icon={faServer} size="2x" />, proficiency: '50%' },
    ],
  };

  const categoryIcons = {
    'frontend': <FontAwesomeIcon icon={faLaptopCode} className="category-icon" />,
    'backend': <FontAwesomeIcon icon={faServer} className="category-icon" />,
    'database': <FontAwesomeIcon icon={faDatabase} className="category-icon" />,
    'tools': <FontAwesomeIcon icon={faTools} className="category-icon" />,
  };

  const handleSkillClick = (skill) => {
    if (openSkill !== skill) {
      setOpenSkill(skill);
      setTimeout(() => {
        const progressBars = document.querySelectorAll(`.skill-content[data-skill="${skill}"] .progress`);
        progressBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.classList.add('loading');
          }, index * 100);
        });
      }, 300);
    } else {
      setOpenSkill(null);
    }
  };

  return (
    <section id="skills" className="Skills">
      <h2>My Skills</h2>
      <p className="skills-intro">
        Take a look at my main IT skills. Each section shows my progress and expertise, 
        giving you a snapshot of what I know and how it fits into the overall picture.
      </p>
      <div className="skills-container">
        <div className="skills-box">
          {Object.keys(skillData).map((category) => (
            <div className={`skill-item ${openSkill === category ? 'open' : ''}`} key={category} onClick={() => handleSkillClick(category)}>
              <h3>
                {category.charAt(0).toUpperCase() + category.slice(1)} Development
                {categoryIcons[category]}
              </h3>
              {openSkill === category && (
                <div className="skill-content" data-skill={category}>
                  <div className="average-knowledge">
                    <h4>Average Knowledge</h4>
                    <div className="progress-bar">
                      <div className="progress" style={{ '--progress-width': `${averageKnowledge[category]}%` }}></div>
                    </div>
                    <p className="skill-text">{skillTexts[category]}</p>
                  </div>
                  <div className="skills-list">
                    {skillData[category].map((skill, index) => (
                      <div className="skill" key={index}>
                        {skill.icon}
                        <div className="skill-details">
                          <p>{skill.name}</p>
                          <div className="progress-bar">
                            <div className="progress" style={{ '--progress-width': skill.proficiency }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="language-skills-box">
          <h3>Language Skills</h3>
          <ul>
            <li>
              German - Native
              <span className="language-points">
                {Array(5).fill(<FontAwesomeIcon icon={faCircle} className="filled-circle" />)}
              </span>
            </li>
            <li>
              English - Fluent
              <span className="language-points">
                {Array(4).fill(<FontAwesomeIcon icon={faCircle} className="filled-circle" />)}
                {Array(1).fill(<FontAwesomeIcon icon={faCircle} className="empty-circle" />)}
              </span>
            </li>
            <li>
              Portuguese - Intermediate
              <span className="language-points">
                {Array(4).fill(<FontAwesomeIcon icon={faCircle} className="filled-circle" />)}
                {Array(1).fill(<FontAwesomeIcon icon={faCircle} className="empty-circle" />)}
              </span>
            </li>
            <li>
              French - Basic
              <span className="language-points">
                {Array(3).fill(<FontAwesomeIcon icon={faCircle} className="filled-circle" />)}
                {Array(2).fill(<FontAwesomeIcon icon={faCircle} className="empty-circle" />)}
              </span>
            </li>
            <li>
              Spanish - Basic
              <span className="language-points">
                {Array(2).fill(<FontAwesomeIcon icon={faCircle} className="filled-circle" />)}
                {Array(3).fill(<FontAwesomeIcon icon={faCircle} className="empty-circle" />)}
              </span>
            </li>
          </ul>
          <h3>Soft Skills</h3>
          <ul className="soft-skills-list">
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Problem-Solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
