import { render, screen } from '@testing-library/react';
import StudentList from '../components/StudentList';
import { StudentProvider } from '../utils/StudentContext';

test('StudentList shows value from provider', () => {
  render(
    <StudentProvider>
      <StudentList />
    </StudentProvider>
  );

  const students = screen.getAllByText(/.*: .*/);

  expect(students.length).toBeGreaterThan(0);
});
