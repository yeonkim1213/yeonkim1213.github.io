import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="btn-group">
        <a href="mailto:yeonjae.kim.jay@gmail.com" className="btn email">
          <Mail className="icon" /> Email
        </a>
        <a href="https://www.linkedin.com/in/ye0njaekim/" target="_blank" rel="noopener noreferrer" className="btn linkedin">
          <Linkedin className="icon" /> LinkedIn
        </a>
        <a href="https://github.com/yeonkim1213" target="_blank" rel="noopener noreferrer" className="btn github">
          <Github className="icon" /> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact; 