import { render } from '@testing-library/react';
import StudentList from '../components/StudentList';
import { StudentProvider } from '../utils/StudentContext';

test('StudentList renders', () => {
  render(
    <StudentProvider>
      <StudentList />
    </StudentProvider>
  );
});
