import React from 'react';
import StarWarsLogo from './../media/star-wars-logo.svg';

function Header() {
  return (
    <header
      className='jumbotron'
      style={{ textAlign: 'center', backgroundColor: '#1e1e1e' }}>
      <img
        src={StarWarsLogo}
        alt='Star Wars logo'
        style={{ width: `${0.3 * window.innerWidth}px` }}
      />
      <h1 style={{ fontSize: `${0.05 * window.innerWidth}px` }}>
        Movie Ratings
      </h1>
    </header>
  );
}

export default Header;
