// TODO: Add a comment giving a brief description of what React is
// React is a javaScript library for building user interfaces.

import React from 'react';

// TODO: Add a comment that describes the difference between react and react-dom
// The react module is an entry point to the React library, while react-dom provides access to DOM-specific methods.
import ReactDOM from 'react-dom';

import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
// ReactDOM.render takes a React component, or tree of React components and (eventually) renders them to the DOM.
// The first argument is the component we want to render (<App/>), and second is the target element to render to (#root)
ReactDOM.render(<App />, document.getElementById('root'));
