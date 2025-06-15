import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { skills } from '../data/skills';
import profileImage from './img/jaykim.png';

const Header = () => {
  return (
    <header id="about" className="header">
      <div className="profile">
        <div className="left">
          <img 
            src={profileImage}
            alt="Jay Kim" 
            className="profile-img"
          />
          <h1>Jay Kim</h1>
          <p className="role">Full Stack Developer</p>
          <p className="desc">
            Hi there, I'm Jay 👋
            <br/>
            I'm a web software developer at the <a href="https://vdl.sci.utah.edu/" target="_blank" rel="noopener noreferrer">Visualization Design Lab (VDL)</a> at the <a href="https://www.utah.edu/" target="_blank" rel="noopener noreferrer">University of Utah</a>. I'm passionate about creating software that improves people's lives through thoughtful design and practical functionality.
            <br/>
            I earned my B.S. in Computer Science from the University of Utah in 2024, specializing in web and app development.
          </p>
          <div className="social">
            <a href="https://github.com/yeonkim1213" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/ye0njaekim/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="mailto:yeonjae.kim.jay@gmail.com">
              <Mail />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="skills">
            <h2>Skills</h2>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <div className="tags">
                  {items.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 