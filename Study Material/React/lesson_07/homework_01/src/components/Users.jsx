import React, { useState } from 'react';

export default function Users({ users, addNew, select }) {
  const [username, setUsername] = useState('');

  // this function verifies that the user has given an input,
  // and checks if given input doesn't already exist
  // only if both conditions are met, the new user will be created
  const createNewUser = () => {
    if (username !== '') {
      let isOkay = true;
      users.forEach((user) => {
        if (user.username === username) {
          isOkay = false;
        }
      });

      if (isOkay) {
        let newUser = {
          id: users.length + 1,
          username: username,
          played: 0,
          wins: 0,
          losses: 0,
        };
        addNew(newUser);
        select(newUser);
        setUsername('');
      } else {
        window.alert('That name already exists!');
      }
    } else {
      window.alert('Please insert a username...');
    }
  };

  return (
    <div className='users'>
      <h1>This is Milhama!</h1>

      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Select a user:</th>
            <th className='border'>played</th>
            <th className='border'>won</th>
            <th className='border'>lost</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td
                className='uname'
                onClick={() => {
                  select(user);
                }}>
                {user.username}
              </td>
              <td className='border'>{user.played} time(s)</td>
              <td className='border'>{user.wins} time(s)</td>
              <td className='border'>{user.losses} time(s)</td>
            </tr>
          ))}
          <tr>
            <td colSpan='4' className='inp-group'>
              <input
                type='text'
                placeholder='Create a new user'
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <button onClick={createNewUser}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
