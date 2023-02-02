import reducer from '../utils/reducers';

import { ADD_STUDENT, REMOVE_STUDENT } from '../utils/actions';

const initialState = {
  students: [
    {
      id: 1,
      name: 'Test Student 1',
      major: 'Major 1',
    },
    {
      id: 2,
      name: 'Test Student 2',
      major: 'Major 2',
    },
  ],
  majors: ['Mathematics', 'Computer Science', 'Art'],
};

test('ADD_STUDENT', () => {
  const newState = reducer(initialState, {
    type: ADD_STUDENT,
    payload: [
      {
        name: 'Test Student 3',
        major: 'Major 3',
      },
    ],
  });

  expect(initialState.students.length).toBe(2);
  expect(newState.students.length).toBe(3);
});

test('REMOVE_STUDENT', () => {
  const newState = reducer(initialState, {
    type: REMOVE_STUDENT,
    payload: 3,
  });

  expect(initialState.students.length).toBe(2);
  expect(newState.students.length).toBe(2);
});
