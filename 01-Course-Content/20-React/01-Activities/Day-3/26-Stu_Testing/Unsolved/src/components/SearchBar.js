import React, { useState } from 'react';

// We take our props object and assign each property to it's own variable name.
// In this case we only passed one prop, `onFormSubmit`
function SearchBar({ onFormSubmit }) {
  // Our state variable for the search term. Defaults to "microsoft/vscode".
  const [term, setTerm] = useState('microsoft/vscode');

  const sendTerm = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={sendTerm}>
        <div className="field">
          <label>Retrieve GitHub Issues</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="facebook/react"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
