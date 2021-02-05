import React, { useState, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { UsersContext } from './../ContextAPI';
import HomeBtn from './HomeBtn';

function Register({ loggedInUser, setLoggedInUser }) {
  const isEditMode = useRef(loggedInUser === undefined ? false : true);
  // this useRef checks if the user entered page as logged in --> edit mode
  // or has entered as new user --> create mode

  const [users, setUsers] = useContext(UsersContext);
  const history = useHistory();

  const [id, setId] = useState(isEditMode.current ? loggedInUser.id : '');
  const verifyId = () => {
    // checks that the ID length is 9, and contains numbers only
    let valid;
    if (id.length === 9) {
      valid = true;
      for (let i = 0; i < id.length; i++) {
        if (id.charAt(i) >= '0' && id.charAt(i) <= '9') {
          // checks numbers as string, because the typed value given to state is stringified
          continue;
        } else {
          valid = false;
          break;
        }
      }
    } else {
      valid = false;
    }
    return valid; // true or false
  };

  const [username, setUsername] = useState(isEditMode.current ? loggedInUser.username : '');
  const verifyUsername = () => {
    // checks that the username is at least 4 characters
    let valid;
    if (username.length >= 4) {
      valid = true;
    } else {
      valid = false;
    }
    return valid; // true or false
  };

  const [password, setPassword] = useState(isEditMode.current ? loggedInUser.password : '');
  const verifyPassword = () => {
    // checks that the password is at least 6 characters
    let valid;
    if (password.length >= 6) {
      valid = true;
    } else {
      valid = false;
    }
    return valid; // true or false
  };

  const [passwordConfirm, setPasswordConfirm] = useState('');
  const verifyPasswordConfirm = () => {
    // checks that the confirmed password is equal to the first password
    let valid;
    if (passwordConfirm === password) {
      valid = true;
    } else {
      valid = false;
    }
    return valid; // true or false
  };

  const [money, setMoney] = useState(isEditMode.current ? loggedInUser.money : '');
  const verifyMoney = () => {
    // checks that the money is between 0 and 1 million
    let valid,
      copyOfMoney = Number(money);
    if (copyOfMoney >= 0 && copyOfMoney <= 1000000) {
      valid = true;
    } else {
      valid = false;
    }
    return valid; // true or false
  };

  const clickCreate = () => {
    if (verifyId() && verifyUsername() && verifyPassword() && verifyPasswordConfirm() && verifyMoney()) {
      // if all verifications return true, add new user
      let newUsers = {
        id,
        username,
        password,
        money,
        transactions: [],
      };
      let copyOfAllUsers = [...users];
      copyOfAllUsers.push(newUsers);
      setUsers(copyOfAllUsers);
      window.alert('User created successfully!');
      history.push('/'); // redirect the page
    } else {
      // one or more verifications returned 'false', display an error
      window.alert('An error occured, failed to create user!');
    }
  };

  const clickSaveEdit = () => {
    if (verifyId() && verifyUsername() && verifyPassword() && verifyPasswordConfirm() && verifyMoney()) {
      // if all verifications return true, save changes
      let copyOfLoggedInUser = { ...loggedInUser }; // copy
      copyOfLoggedInUser.id = id; // update
      copyOfLoggedInUser.username = username; // update
      copyOfLoggedInUser.password = password; // update
      copyOfLoggedInUser.money = money; // update

      let copyOfAllUsers = [...users]; // copy
      for (let i = 0; i < copyOfAllUsers.length; i++) {
        // loop through all users
        if (copyOfAllUsers[i].id === loggedInUser.id) {
          // find the user by it's --previous-- ID (it may have changed)
          copyOfAllUsers[i] = copyOfLoggedInUser; // update exisiting changes to exisiting user
          break;
        }
      }

      setUsers(copyOfAllUsers);
      setLoggedInUser(copyOfLoggedInUser);
      window.alert('Changes saved successfully!');
      history.push(`/${username}`); // redirect the page
    } else {
      // one or more verifications returned 'false', display an error
      window.alert('An error occured, failed to save changes!');
    }
  };

  return (
    <>
      <h1>REGISTER</h1>

      <input
        type='number'
        placeholder='ID'
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
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
      <input
        type='password'
        placeholder='Confirm password'
        value={passwordConfirm}
        onChange={(e) => {
          setPasswordConfirm(e.target.value);
        }}
      />
      <input
        type='number'
        placeholder='Money'
        value={money}
        onChange={(e) => {
          setMoney(e.target.value);
        }}
      />

      <button onClick={isEditMode.current ? clickSaveEdit : clickCreate}>{isEditMode.current ? 'Save' : 'Create'}</button>
      <HomeBtn />
    </>
  );
}

export default Register;
