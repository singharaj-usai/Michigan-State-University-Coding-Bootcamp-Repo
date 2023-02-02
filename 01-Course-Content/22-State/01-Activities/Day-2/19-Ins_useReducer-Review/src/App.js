import React, { useEffect } from 'react';
import NameComponent from './components/NameComponent';
import NameProvider from './utils/NameContext';

export default function App() {
  useEffect(() => {
    document.title = 'Module 22.2: useReducer Review';
  }, []);

  return (
    <NameProvider>
      <NameComponent />
    </NameProvider>
  );
}
