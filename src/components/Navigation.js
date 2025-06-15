import React from 'react';

const Navigation = ({ onScroll }) => {
  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Publications', id: 'publications' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleProjectsClick = () => {
    onScroll('projects');
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">Jay Kim</div>
        <div className="nav-links">
          {navItems.map(item => (
            <button key={item.id} onClick={() => onScroll(item.id)}>
              {item.name}
            </button>
          ))}
          <button className="projects-button" onClick={handleProjectsClick}>
            Visit my projects! 🚀
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 