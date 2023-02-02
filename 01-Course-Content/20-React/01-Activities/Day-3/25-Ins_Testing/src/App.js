import React, { useState } from 'react';
// Here we import our Welcome component from /components
import Welcome from './components/Welcome';

function App() {
  // We declare two state variables and functions to update both
  // Name is the user's name, topic is what the user wants to learn
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');

  return (
    <div className="container">
      <div>
        <span>Enter your name: </span>
        <input onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <span>What do you want to learn? </span>
        <input onChange={(e) => setTopic(e.target.value)} />
      </div>
      <hr />
      <Welcome name={name} topic={topic} />
    </div>
  );
}

export default App;
