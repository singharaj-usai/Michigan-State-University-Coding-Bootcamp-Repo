// Import our actions. Actions are in all caps.
import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR,
} from './actions';
import createId from './createId';

// Reducer accepts state and an action, returns a new state
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
      const studentIndex = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      // Variable to hold our student object
      const updatedStudent = {
        ...state.students[studentIndex],
        ...action.payload,
      };

      // Make a copy of our current students array
      const newStudentsList = [...state.students];

      // Assign the updated student to their existing position in the newStudentsList
      newStudentsList[studentIndex] = updatedStudent;

      return {
        ...state,
        students: newStudentsList,
      };
    }
    case ADD_MAJOR: {
      return {
        ...state,
        majors: [...state.majors, action.payload],
      };
    }
    case REMOVE_MAJOR: {
      return {
        ...state,
        majors: [...state.majors].filter((major) => major !== action.payload),
      };
    }
    default:
      return state;
  }
}
