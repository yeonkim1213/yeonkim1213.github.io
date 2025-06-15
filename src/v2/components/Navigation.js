import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ onScroll }) => {
  const navigate = useNavigate();
  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Publications', id: 'publications' },
    { name: 'Courses', id: 'courses' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleVersionChange = (e) => {
    const version = e.target.value;
    if (version === 'v1.0') {
      navigate('/v1');
    } else if (version === 'v2.0') {
      navigate('/v2');
    }
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
          <div className="version-dropdown">
            <select onChange={handleVersionChange} defaultValue="v2.0">
              <option value="v1.0">v1.0</option>
              <option value="v2.0">v2.0</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 