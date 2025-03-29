import React from 'react';
import { GraduationCap } from 'lucide-react';
import { courses } from '../data/courses';

const Courses = () => {
  return (
    <section id="courses" className="courses">
      <h2><GraduationCap className="icon" /> Coursework</h2>
      <div className="courses-grid">
        <div className="course-section">
          <h3>Computer Science Core</h3>
          <ul>
            {courses.computerScience.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
        <div className="course-section">
          <h3>Computer Science Electives</h3>
          <ul>
            {courses.computerScienceElectives.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
        <div className="course-section">
          <h3>Mathematics</h3>
          <ul>
            {courses.mathematics.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Courses; 