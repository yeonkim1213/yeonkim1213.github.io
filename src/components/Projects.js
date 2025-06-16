import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2><Code className="icon" /> Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <div className="links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="icon" /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="icon" /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 