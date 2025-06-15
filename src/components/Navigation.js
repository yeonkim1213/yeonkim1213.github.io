import React from 'react';

const Navigation = ({ onScroll }) => {
  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Publications', id: 'publications' },
    { name: 'Courses', id: 'courses' },
    { name: 'Contact', id: 'contact' }
  ];

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
          <div className="version-dropdown">
            <select defaultValue="v1.0">
              <option value="v1.0">v1.0</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 