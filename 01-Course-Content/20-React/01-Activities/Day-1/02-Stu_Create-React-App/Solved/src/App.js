import React from 'react';
import HelloReact from './components/HelloReact';

// TODO: Add a comment explaining what this function is doing
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
function App() {
  return <HelloReact />;
}

export default App;
