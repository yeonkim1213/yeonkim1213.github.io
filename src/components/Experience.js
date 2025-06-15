import React from 'react';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2><Briefcase className="icon" /> Experience</h2>
      <div className="timeline">
        {experience.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="content">
              <h3>{item.title}</h3>
              <p className="place">{item.place}</p>
              <p className="duration">{item.duration}</p>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 