import React, { useState } from 'react';
// Import our custom useStudentContext hook to have access to the initial state
import { useStudentContext } from '../utils/StudentContext';

export default function StudentList() {
  // TODO: Import the students, actions and majors from our custom useStudentContext hook

  // Initialize state for new students and new student majors
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentMajor, setNewStudentMajor] = useState('');

  return (
    <div>
      {students ? (
        <>
          <section className="student-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          // TODO: Update the button's onClick so that it will remove students
                          // Your code here
                        }}
                      >
                        <span role="img" aria-label="close">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-student">
              <input
                onChange={(e) => setNewStudentName(e.target.value)}
                placeholder="New student name..."
                type="text"
                value={newStudentName}
              />

              <select
                onChange={(e) => setNewStudentMajor(e.target.value)}
                value={newStudentMajor}
              >
                <option>Choose major...</option>
                {/* // TODO: Map over each major and return an <option> element for each with all the necessary attributes*/}
                {/* Your code here */}
              </select>
              <button
                type="button"
                onClick={() => {
                  // TODO: Write an onClick for the button so that it will add students
                  // Your code here
                }}
              >
                Add Student
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
