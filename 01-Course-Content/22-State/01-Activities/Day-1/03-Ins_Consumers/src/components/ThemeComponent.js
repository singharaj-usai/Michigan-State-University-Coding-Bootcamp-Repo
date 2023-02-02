import React from 'react';
// Import our custom hook.
import { useTheme } from '../utils/ThemeContext';

// Make our ThemeComponent the default export from this file
export default function ThemeComponent() {
  // Pluck values from our ThemeContext by invoking our useTheme hook
  const { darkTheme, toggleTheme } = useTheme();

  // Object containing CSS gradient for darkTheme and non-darkTheme
  const themeStyles = {
    background: darkTheme
      ? '-webkit-linear-gradient(top left, #150C17, #535353)'
      : '-webkit-linear-gradient(bottom, #FFFFFF, #EDBAAB)',
    padding: '10rem',
    margin: '10rem',
    borderRadius: '30px',
    color: darkTheme ? '#FAFAFA' : '#363537',
  };

  return (
    <>
      <h1>Consumers!</h1>
      <button id="button" onClick={toggleTheme} className="btn" type="button">
        Toggle dark theme
      </button>
      <section className="text-center">
        The current value of{' '}
        <code style={{ fontWeight: 'bold' }}>
          darkTheme: {darkTheme.toString()}
        </code>
      </section>
      <div style={themeStyles}>
        <h1>Theme Component</h1>
      </div>
    </>
  );
}
