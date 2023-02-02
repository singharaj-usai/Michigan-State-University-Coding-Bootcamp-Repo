import React, { useState } from 'react';
import { useStudentContext } from '../utils/StudentContext';

export default function StudentList() {
  // Assign student related variables from our custom hook
  const { students, addStudent, removeStudent, majors } = useStudentContext();

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
                        onClick={() => removeStudent(student.id)}
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
                {majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => {
                  addStudent({ name: newStudentName, major: newStudentMajor });
                  setNewStudentName('');
                  setNewStudentMajor('');
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
