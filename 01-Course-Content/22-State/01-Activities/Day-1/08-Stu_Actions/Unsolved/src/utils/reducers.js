import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR,
} from './actions';
import createId from './createId';

// TODO: Add a comment explaining what a reducer is
// Your comment here
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT: {
      const newStudentId = createId(state.students);

      const newStudent = { ...action.payload, id: newStudentId };

      return {
        ...state,
        students: [...state.students, newStudent],
      };
    }
    case REMOVE_STUDENT: {
      return {
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    case UPDATE_STUDENT: {
      // TODO: Add a comment describing how we get the student index
      // Your comment here
      const studentIndex = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      // TODO: Add a comment describing what the spread operator is doing
      // Your code here
      const updatedStudent = {
        ...state.students[studentIndex],
        ...action.payload,
      };

      const newStudentsList = [...state.students];

      newStudentsList[studentIndex] = updatedStudent;

      return {
        ...state,
        students: newStudentsList,
      };
    }
    case ADD_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
      return {
        ...state,
        majors: [...state.majors, action.payload],
      };
    }
    case REMOVE_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
      return {
        ...state,
        majors: [...state.majors].filter((major) => major !== action.payload),
      };
    }
    default:
      return state;
  }
}
