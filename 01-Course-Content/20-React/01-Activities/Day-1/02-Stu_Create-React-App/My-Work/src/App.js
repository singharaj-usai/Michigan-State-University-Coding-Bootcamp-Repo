import React from 'react';
// The import React from 'react' statement is importing the React module from the react package.
// This module contains functions and methods that are used for creating and managing React components.
// TODO: Add a comment explaining what this import statement is doing
// The import HelloReact from './components/HelloReact' statement is importing the HelloReact component that is defined in the HelloReact.js file located in the components directory.
// The ./ indicates that the file is located in the current directory, while components/HelloReact indicates the location of the file.
import HelloReact from './components/HelloReact';

// TODO: Add a comment explaining the purpose of the App component
// The App component is the root component of the application, all the other components will be rendered within this component.
// It renders the HelloReact component and nothing else, it's just a simple example, in real-world scenarios it could be more complex.
function App() {
  return <HelloReact />;
}

export default App;
