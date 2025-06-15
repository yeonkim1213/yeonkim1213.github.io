import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Courses from './components/Courses';
import Contact from './components/Contact';

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <Navigation onScroll={scrollTo} />
      <Header />
      <Experience />
      <Projects />
      <Publications />
      <Courses />
      <Contact />
      <footer className="footer">
        <p>© 2024 Jay Kim. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App; 