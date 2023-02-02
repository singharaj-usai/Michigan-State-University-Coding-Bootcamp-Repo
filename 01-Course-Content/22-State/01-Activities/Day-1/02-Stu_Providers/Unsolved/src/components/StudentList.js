import React from 'react';
// Import our custom useStudentContext hook
import { useStudentContext } from '../utils/StudentContext';

export default function StudentList() {
  // Assign students variable from our custom hook
  const { students } = useStudentContext();

  return (
    <>
      <span>Looks good here, make sure to run the tests!</span>
      <ul>
        {students.map((student) => (
          <li key={student.name}>
            {student.name} : {student.major}
          </li>
        ))}
      </ul>
    </>
  );
}
