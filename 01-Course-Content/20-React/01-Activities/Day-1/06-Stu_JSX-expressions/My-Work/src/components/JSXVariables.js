import React from 'react';

// TODO: Create a `name` variable
const name = "John Doe";

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React
const thoughts = "is a powerful tool for building user interfaces";
// This is an example of how the name and thoughts variables can be defined and used in the JSXVariables component.
// A const keyword is used to define the variable and the value is assigned to it.
// In JSX, we use curly brace {} to indicate that we want to include a JavaScript expression.
// In this case the variables name and thoughts are included in the JSX code to be rendered. name.length is used to determine the number of letters in the name.

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is (insert name here)</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has (insert number of letters in name here) letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React (insert thoughts about React here)</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
