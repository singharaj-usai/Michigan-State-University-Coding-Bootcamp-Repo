import React, { useState, useContext } from 'react';

// Create our theme context using React.CreateContext()
export const ThemeContext = React.createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const useTheme = () => useContext(ThemeContext);

// Creating our theme provider. Accepts an argument of "props", here we plucking off the "children" object.
export default function ThemeProvider({ children }) {
  // Creating our state
  const [darkTheme, setDarkTheme] = useState(true);

  // Method to update our state
  const toggleTheme = () => {
    console.log('inside toggle theme');
    return setDarkTheme((prev) => !prev);
  };

  // The provider component will wrap all other components inside of it that need access to our global state
  return (
    // Dark theme and toggle theme are getting provided to the child components
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
