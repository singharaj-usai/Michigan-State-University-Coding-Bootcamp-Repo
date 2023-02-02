// We import useState and useEffect in our component
import React, { useState, useEffect } from 'react';
import IssueList from './components/IssueList';

function App() {
  // We declare a state variable that is an array called `issues` and a function to update it.
  const [issues, setIssues] = useState([]);

  // When the page loads, we invoke our getRepoIssues method and pass in 'facebook/react' as the repo name
  // This only runs once because of our empty dependency array.
  useEffect(() => {
    getRepoIssues('facebook/react');
    return () => {
      console.log('goodbye now!')
    }
  }, []);

  // Helper function that preforms an API request and sets the `issues` array to a list of issues from GitHub
  const getRepoIssues = (repo) => {
    let issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
    console.log('issuesURL', issuesURL);
    fetch(issuesURL)
      .then((res) => res.json())
      .then((response) => setIssues(response));
  };

  return (
    <div className="container">
      <h2 className="header">GitHub issues for 'facebook/react'</h2>
      <span className="text-primary">
        Stored in state variable <code>issues</code>
      </span>
      <hr></hr>
      <div className="ui grid">
        <div className="row">
          <div className="col-11">
            <IssueList issues={issues} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
