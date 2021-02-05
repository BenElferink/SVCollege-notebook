import React from 'react';
import { useHistory } from 'react-router-dom';

function LogoutBtn({ setLoggedEmployee }) {
  const history = useHistory();

  return (
    <button
      onClick={() => {
        setLoggedEmployee(false);
        history.push('/');
      }}>
      Logout
    </button>
  );
}

export default LogoutBtn;
