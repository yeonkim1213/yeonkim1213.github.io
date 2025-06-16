import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = document.querySelector('.nav').offsetHeight;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Router>
      <div className="container">
        <Navigation onScroll={scrollTo} />
        <Header />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </div>
    </Router>
  );
}

export default App; 