import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <button>
        <Link to='/'> Page 1 </Link>
      </button>
      <button>
        <Link to='/page2'> Page 2 </Link>
      </button>
    </nav>
  );
}

export default Nav;
