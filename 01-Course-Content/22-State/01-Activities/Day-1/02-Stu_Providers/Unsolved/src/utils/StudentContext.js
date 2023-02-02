import React, { createContext, useContext } from 'react';

// Initialize new context for students
const StudentContext = createContext();

// We create a custom hook to provide immediate usage of the student context in other components
export const useStudentContext = () => useContext(StudentContext);

// StudentProvider is a function that will return a provider component that makes global state available
export const StudentProvider = ({ children }) => {
  const initialState = {
    students: [
      // TODO: Add two students with a `name`, `major` and `id` property
    ],
  };

  // TODO: Fill in the value prop for the provider
  return (
    <StudentContext.Provider value={}>
      {/* //TODO: Render the children from props */}
    </StudentContext.Provider>
  );
};
