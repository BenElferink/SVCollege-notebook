import React from 'react';
import { Link } from 'react-router-dom';

function HomeBtn({ onClick }) {
  return (
    <Link to='/'>
      <button onClick={onClick}>Home</button>
    </Link>
  );
}

export default HomeBtn;
