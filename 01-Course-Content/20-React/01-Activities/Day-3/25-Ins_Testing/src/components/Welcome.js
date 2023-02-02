import React from 'react';

// Here we declare our Welcome component
// We accept props from the App component and immediately assign them to their own variables: `name`, and `topic`
// Topic is set to the value of "Web development" if no value is provided
export default function Welcome({ name, topic = 'Web Development' }) {
  // Boolean value that returns true if both props are not empty
  const infoPassed = name && topic;

  // If the correct info was passed as props, render the welcome statement. Otherwise, rendering a basic "Hey there!"
  return infoPassed ? (
    <h1>
      Welcome, {name}! We hope you learn a lot about {topic}.
    </h1>
  ) : (
    <span>Hey there!</span>
  );
}
