import React from 'react';

// TODO: Add a comment explaining what a react component is
// A React component is a piece of code that represents a part of a user interface.
// It is a JavaScript class or function that describes a part of the UI and handles any logic needed for that part of the interface.
// In the example above, HelloReact is a simple functional component which renders a p element with the text "Hello World! Here is some text"
function HelloReact() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension for JavaScript that allows you to write HTML-like elements in your JavaScript code.
  // In the example above, <p>Hello World! Here is {text}</p> is an example of JSX.
  // The curly braces {} indicate that the code inside should be evaluated as JavaScript, in this case it will evaluate the variable text.

  // JSX is then transpiled by tools like babel so that the code can be run in the browser which can not understand JSX.
  return <p>Hello World! Here is {text}</p>;
}

export default HelloReact;
