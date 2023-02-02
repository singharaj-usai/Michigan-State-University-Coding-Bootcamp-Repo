import React, { useState } from 'react';
import { UPDATE_ACCOUNT_NAME, UPDATE_ACCOUNT_STATUS } from '../utils/actions';
import { useAccountContext } from '../utils/GlobalState';

export default function AccountDisplay() {
  const [state, dispatch] = useAccountContext();
  const [newName, setNewName] = useState(state.userName);
  const [updatingName, setUpdatingName] = useState(false);

  const toggleUpdateName = () => {
    setUpdatingName(!updatingName);
  };

  const handleInputSubmit = () => {
    dispatch({
      type: UPDATE_ACCOUNT_NAME,
      userName: newName,
    });
    setUpdatingName(!updatingName);
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <>
      {state.isLoggedIn ? (
        <>
          <h1>Welcome {state.userName}!</h1>
          {updatingName ? (
            <div>
              <input
                placeholder="New userName"
                onChange={handleInputChange}
                onSubmit={handleInputSubmit}
              ></input>
              <button onClick={handleInputSubmit}>Submit</button>
            </div>
          ) : (
            <button onClick={toggleUpdateName}>Update userName</button>
          )}
          <span>You are currently signed in ✅</span>
        </>
      ) : (
        <h1>Welcome! Please log in!</h1>
      )}
      <button
        onClick={() =>
          dispatch({
            type: UPDATE_ACCOUNT_STATUS,
            isLoggedIn: state.isLoggedIn,
          })
        }
      >
        {state.isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </>
  );
}
