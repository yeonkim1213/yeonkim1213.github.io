import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((proj, i) => (
          <div key={i} className="card">
            <div className="card-body">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tags">
                {proj.tags.map((tag, j) => <span key={j}>{tag}</span>)}
              </div>
              <div className="links">
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <Github className="icon" /> Code
                </a>
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="icon" /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 