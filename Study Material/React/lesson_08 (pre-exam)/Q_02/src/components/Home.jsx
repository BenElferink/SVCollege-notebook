import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <h2>Logistics Management</h2>

      <Link to='/signup'>
        <button>Sign up</button>
      </Link>

      <Link to='/login'>
        <button>Log in</button>
      </Link>
    </div>
  );
}

export default Home;
