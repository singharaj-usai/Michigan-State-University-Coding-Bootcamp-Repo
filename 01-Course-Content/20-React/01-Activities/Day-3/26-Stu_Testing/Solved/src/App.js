// We import useState and useEffect in our component
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import IssueList from './components/IssueList';

function App() {
  // We declare a state variable that is an array called `issues` and a function to update it.
  const [issues, setIssues] = useState([]);

  // When the page loads, set the document title to something specific to this app.
  // This only runs once because of our empty dependency array.
  useEffect(() => {
    document.title = 'GitHub issues';
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
    <div className="ui container">
      {/* Here we pass our getRepoIssues function as a prop to SearchBar */}
      <SearchBar onFormSubmit={getRepoIssues} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <IssueList issues={issues} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
