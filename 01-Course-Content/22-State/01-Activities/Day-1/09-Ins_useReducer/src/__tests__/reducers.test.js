import { reducer } from '../utils/reducers';
import { TOGGLE_THEME } from '../utils/actions';

const initialState = {
  darkTheme: false,
};

test('TOGGLE_THEME', () => {
  let newState = reducer(initialState, {
    type: TOGGLE_THEME,
    payload: {
      darkTheme: !initialState.darkTheme,
    },
  });

  expect(initialState.darkTheme).toBe(false);
  expect(newState.darkTheme).toBe(true);
});
