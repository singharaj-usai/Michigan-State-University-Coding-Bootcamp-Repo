import React from 'react';

// Issue item accepts a single issue as a prop
// This component is responsible for displaying the specific information for a given issue
const IssueItem = ({ issue }) => {
  return (
    <div className="card mb-3" style={{ border: 'none' }}>
      <div
        className="card-header bg-info text-light p-2 m-0"
        style={{ color: 'white', borderRadius: '5px' }}
      >
        <a
          style={{ color: 'white', borderRadius: '5px' }}
          className="header"
          href={issue.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {issue.title}
        </a>
        <div className="description">{issue.description}</div>
      </div>
    </div>
  );
};

export default IssueItem;
