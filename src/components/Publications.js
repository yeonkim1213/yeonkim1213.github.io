import React from 'react';
import { publications } from '../data/publications';
import { ExternalLink, BookOpen } from 'lucide-react';

const Publications = () => {
  const highlightAuthor = (authors) => {
    const authorList = authors.split(', ');
    return authorList.map((author, index) => {
      const isLast = index === authorList.length - 1;
      if (author === 'Yeonjae Kim') {
        return (
          <React.Fragment key={index}>
            <span className="highlighted-author">{author}</span>
            {!isLast && ', '}
          </React.Fragment>
        );
      }
      return (
        <React.Fragment key={index}>
          {author}
          {!isLast && ', '}
        </React.Fragment>
      );
    });
  };

  return (
    <section id="publications" className="publications">
      <h2><BookOpen className="icon" /> Publications</h2>
      <div className="publications-container">
        {publications.map((section, index) => (
          <div key={index} className="publication-section">
            <h3>{section.type}</h3>
            <div className="publications-grid">
              {section.papers.map((paper, paperIndex) => (
                <div key={paperIndex} className="publication-card">
                  <h4>{paper.title}</h4>
                  <p className="authors">{highlightAuthor(paper.authors)}</p>
                  <p className="venue">{paper.venue}</p>
                  <div className="links">
                    <a href={paper.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="icon" /> Paper
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications; 