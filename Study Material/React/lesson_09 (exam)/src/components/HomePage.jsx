import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UsersContext } from './../ContextAPI';

function HomePage({ setLoggedInUser }) {
  const [users] = useContext(UsersContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const clickEnter = () => {
    if (username === 'ADMIN' && password === 'ADMIN') {
      // first handle admin request
      history.push('/admin'); // redirect the page
    } else {
      // if not an admin, continue with default verification
      let copyOfAllUsers = [...users],
        indexOfExistingUser = false;

      // loop through all users and find the user by username
      for (let i = 0; i < copyOfAllUsers.length; i++) {
        if (copyOfAllUsers[i].username === username) {
          indexOfExistingUser = i;
          break;
        }
      }

      // if user was found (meaning it exists)
      if (indexOfExistingUser !== false) {
        // verify it's password
        if (copyOfAllUsers[indexOfExistingUser].password === password) {
          // and login
          setLoggedInUser(copyOfAllUsers[indexOfExistingUser]);
          window.alert('Logged in successfully');
          history.push(`/${username}`); // redirect the page
        } else {
          window.alert('Password incorrect!');
        }
      } else {
        window.alert('Username does not exist!');
      }
    }
  };

  return (
    <>
      <h1>SV-BANK</h1>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Link to='/register'>Create new user</Link>
      <button onClick={clickEnter}>ENTER</button>
    </>
  );
}

export default HomePage;
