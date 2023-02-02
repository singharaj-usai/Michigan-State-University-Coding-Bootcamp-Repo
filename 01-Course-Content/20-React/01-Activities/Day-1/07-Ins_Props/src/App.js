import React from 'react';
// First we import our Alert component from the components folder
import Alert from './components/Alert';

// We create a couple variables which contain strings
const message = 'Invalid user id or password';
const alertType = "danger"

// We then return Alert, we pass it a prop, "message" set to the value of our message variable
// We also pass a type prop to the component set to the value of "alertType"
function App() {
  return <Alert type={alertType} message={message} />;
}

export default App;
