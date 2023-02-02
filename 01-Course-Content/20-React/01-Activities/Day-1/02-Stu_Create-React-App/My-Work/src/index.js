// TODO: Add a comment giving a brief description of what React is
// React is a JavaScript library for building user interfaces.
// It allows developers to create reusable UI components and manage the state and behavior of those components, making it easier to create complex and dynamic web applications.
import React from 'react';

// TODO: Add a comment that describes the difference between react and react-dom
// React and ReactDOM are two separate libraries that are commonly used together.
// React is the core library that provides the ability to create and manage components, while ReactDOM is a separate library that provides an interface to the DOM (Document Object Model) and is responsible for rendering React components to the web page.
import ReactDOM from 'react-dom';

import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
// The ReactDOM.render() method is used to render a React component to a specific DOM element.
// In the example above, the <App /> component is being rendered to an element with the id of "root" using the ReactDOM.render method.
// This is typically the entry point of the React application, it tells React to take the App component and render it to the DOM element with the id of "root".
ReactDOM.render(<App />, document.getElementById('root'));
