import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Action from './Action';
import HomeBtn from './HomeBtn';

function Welcome({ user, loggedState }) {
  const [loggedInUser, setLoggedInUser] = loggedState;
  const [showActionComponent, setShowActionComponent] = useState(false);
  const history = useHistory();

  const clickBalance = () => {
    window.alert(`You have $${user.money} in your account.`); // just an alert
  };

  const clickAction = () => {
    setShowActionComponent(!showActionComponent); // reveals the component, or hides it if clicked again
  };

  const clickExit = () => {
    setLoggedInUser({}); // makes sure the user is unset from it's "logged in state"
    history.push('/'); // redirect the page
  };

  const clickEdit = () => {
    history.push('/edit');
  };

  return (
    <>
      {user.id === loggedInUser.id ? ( // verifies that the user did pass the login stage !!
        <>
          <h1>Welcome</h1>
          <h3>{user.username}</h3>

          {showActionComponent && <Action user={user} />}

          <div className='welcome-buttons'>
            <button onClick={clickBalance}>Balance</button>
            <button onClick={clickAction}>Action</button>
            <button onClick={clickExit}>Exit</button>
            <button onClick={clickEdit}>Edit</button>
          </div>
        </>
      ) : (
        <>
          <p>You must be logged in to view this page!</p>
          <HomeBtn />
        </>
      )}
    </>
  );
}

export default Welcome;
