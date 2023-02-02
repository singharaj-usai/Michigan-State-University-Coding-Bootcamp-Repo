import React from 'react';
import UserProvider from './utils/UserContext';
import UserComponent from './components/UserComponent';
import './jass.css';
import './app.css';

export default function App() {
  return (
    <div>
      <UserProvider>
        <UserComponent />
      </UserProvider>
    </div>
  );
}
