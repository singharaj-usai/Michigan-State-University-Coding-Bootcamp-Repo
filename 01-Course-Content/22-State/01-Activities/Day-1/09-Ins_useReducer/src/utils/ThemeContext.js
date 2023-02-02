import React, { createContext, useContext } from 'react';

// Create our theme context using React.CreateContext()
export const ThemeContext = createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const useTheme = () => useContext(ThemeContext);

// Creating our theme provider. Accepts an argument of "props"
export default function ThemeProvider(props) {
  const darkTheme = false;

  return <ThemeContext.Provider value={{ darkTheme }} {...props} />;
}
