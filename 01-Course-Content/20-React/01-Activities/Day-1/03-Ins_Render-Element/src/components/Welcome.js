import React from 'react';

export default function Welcome() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>Hello students!</h1>
      <p>Today we will be learning about the following:</p>
      <ul className="parent">
        <li>React</li>
        <li>Components</li>
        <li>Props</li>
        <li>Babel</li>
      </ul>
    </div>
  );
}
