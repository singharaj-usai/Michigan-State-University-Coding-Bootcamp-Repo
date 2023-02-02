import { TOGGLE_THEME } from './actions';

export const reducer = (state, { type }) => {
  const newDarkTheme = !state.darkTheme;
  switch (type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        darkTheme: newDarkTheme,
      };
    }
    default:
      return state;
  }
};
