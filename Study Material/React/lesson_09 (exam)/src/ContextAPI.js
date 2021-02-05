import React from 'react';

export const UsersContext = React.createContext();

export const UsersProvider = (props) => {
  const [users, setUsers] = React.useState([]);

  return <UsersContext.Provider value={[users, setUsers]}>{props.children}</UsersContext.Provider>;
};
