import React, { useContext } from 'react';
import { UsersContext } from './../ContextAPI';
import ManageUser from './ManageUser';
import HomeBtn from './HomeBtn';

function Manager() {
  const [users, setUsers] = useContext(UsersContext);

  return (
    <>
      <h1>Manager</h1>

      <ul>
        {users.map((user) => (
          <ManageUser key={user.id} user={user} users={users} setUsers={setUsers} />
        ))}
      </ul>

      <HomeBtn />
    </>
  );
}

export default Manager;
