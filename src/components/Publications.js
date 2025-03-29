import React from 'react';
import { BookText } from 'lucide-react';
import { publications } from '../data/publications';

const Publications = () => {
  return (
    <section id="publications" className="publications">
      <h2><BookText className="icon" /> Publications</h2>
      <div className="pub-list">
        {publications.map((section, index) => (
          <div key={index} className="pub-section">
            <h3>{section.type}</h3>
            {section.papers.map((paper, paperIndex) => (
              <div key={paperIndex} className="pub-item">
                <p className="venue">{paper.venue}</p>
                <h4>{paper.title}</h4>
                <p className="authors">{paper.authors}</p>
                {paper.conference && <p className="conference">{paper.conference}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications; 