import React, { useState } from 'react';

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    name: 'John',
    role: 'Admin',
    id: 142323,
  });

  return (
    <UserContext.Provider value={{ currentUser: currentUser }} {...props} />
  );
};

export default UserProvider;
