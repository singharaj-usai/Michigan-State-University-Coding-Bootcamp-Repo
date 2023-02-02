import React, { createContext, useContext } from 'react';

// Initialize new context for students
const StudentContext = createContext();

// We create a custom hook to provide immediate usage of the student context in other components
export const useStudentContext = () => useContext(StudentContext);

// StudentProvider component that holds initial state, returns provider component
export const StudentProvider = ({ children }) => {
  const initialState = {
    students: [
      {
        id: 1,
        name: 'Sayid',
        major: 'Computer Science',
      },
      {
        id: 2,
        name: 'Sun-Hwa',
        major: 'Data Science',
      },
    ],
  };

  // Provider components expect a value prop to be passed
  return (
    <StudentContext.Provider value={initialState}>
      {/* Render children passed from props */}
      {children}
    </StudentContext.Provider>
  );
};
