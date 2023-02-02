import React, { createContext, useContext, useState } from 'react';
import createId from './createId';

const StudentContext = createContext();

// Custom hook to provide usage of the student context
export const useStudentContext = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
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
  ]);

  // Function to add a student
  const addStudent = (student) => {
    // Prevent adding blank entries
    if (!student.name) {
      return;
    }
    const id = createId(students);

    const newStudent = { ...student, id };

    setStudents([...students, newStudent]);
  };

  // Function to remove a student
  const removeStudent = (id) => {
    const newStudentsList = students.filter((student) => student.id !== id);

    setStudents(newStudentsList);
  };

  const majors = [
    'Mathematics',
    'Computer Science',
    'Art',
    'English',
    'Political Science',
    'Journalism',
    'Engineering',
  ];

  // The value prop expects an initial state object
  return (
    <StudentContext.Provider
      value={{ students, addStudent, removeStudent, majors }}
    >
      {children}
    </StudentContext.Provider>
  );
};
