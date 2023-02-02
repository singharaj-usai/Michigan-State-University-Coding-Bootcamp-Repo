import React, { useReducer } from 'react';
import { useTheme } from '../utils/ThemeContext';

// Import our reducer
import { reducer } from '../utils/reducers';

// Import our action
import { TOGGLE_THEME } from '../utils/actions';

export default function ThemeComponent() {
  const initialState = useTheme();

  // Set up our useReducer hook. Accepts two arguments - the reducer and an initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  const themeStyles = {
    background: state.darkTheme
      ? '-webkit-linear-gradient(top left, #150C17, #535353)'
      : '-webkit-linear-gradient(bottom, #FFFFFF, #EDBAAB)',
    padding: '10rem',
    margin: '10rem',
    borderRadius: '30px',
    color: state.darkTheme ? '#FAFAFA' : '#363537',
  };

  return (
    <>
      <h1>useReducer!</h1>
      <button
        id="button"
        // To change the theme we invoke dispatch and pass in an object containing action type and payload
        onClick={() =>
          dispatch({ type: TOGGLE_THEME, payload: state.darkTheme })
        }
        className="btn"
        type="button"
      >
        Toggle dark theme
      </button>
      <section className="text-center">
        The current value from global state for{' '}
        <code style={{ fontWeight: 'bold' }}>
          darkTheme: {state.darkTheme.toString()}
        </code>
      </section>
      <div style={themeStyles}>
        <h1>Theme Component</h1>
      </div>
    </>
  );
}
