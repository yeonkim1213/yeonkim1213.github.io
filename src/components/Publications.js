import React from 'react';
import { publications } from '../data/publications';
import { ExternalLink } from 'lucide-react';

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
    <section className="publications" id="publications">
      <div className="container">
        <h2>Publications</h2>
        <div className="pub-list">
          {publications.map((section, index) => (
            <div key={index}>
              <h3>{section.type}</h3>
              {section.papers.map((paper, paperIndex) => (
                <div key={paperIndex} className="pub-item">
                  <h4>{paper.title}</h4>
                  <p className="venue">{paper.venue}</p>
                  <p className="authors">{highlightAuthor(paper.authors)}</p>
                  <p className="date">{paper.date}</p>
                  <div className="pub-links">
                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="doi-link">
                      DOI: {paper.doi}
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications; 