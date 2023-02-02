import React, { useEffect } from 'react';
import ThemeComponent from './components/ThemeComponent';
// Importing our theme provider which will make our global state available to child components
import ThemeProvider from './utils/ThemeContext';

export default function App() {
  useEffect(() => {
    document.title = 'Module 22.1: Consumers';
  }, []);

  return (
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
}
