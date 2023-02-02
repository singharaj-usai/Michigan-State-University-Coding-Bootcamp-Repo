// We import useState and useEffect in our component
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import IssueList from './components/IssueList';

function App() {
  // We declare a state variable that is an array called `issues` and a function to update it.
  const [issues, setIssues] = useState([]);

  // When the page loads, set the document title to something specific to this app. Runs once because of optional dependency array
  useEffect(() => {
    document.title = 'React Hooks Review';
  }, []);

  // Helper function that preforms an API request and sets the `issues` array to a list of issues from GitHub
  const getRepoIssues = async (repo) => {
    let issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
    const response = await fetch(issuesURL);
    const data = await response.json();
    setIssues(data);
  };

  return (
    <div className="container">
      {/* Here we pass our getRepoIssues function as a prop to SearchBar */}
      <SearchBar onFormSubmit={getRepoIssues} />
      <div className="col auto">
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
