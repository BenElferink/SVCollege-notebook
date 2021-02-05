import React from 'react';
import svLogo from './../img/sv-logo.jpg';

function Header() {
  return (
    <header className='header'>
      <h1>
        SVCo<span style={{ textDecoration: 'overline' }}>llege summary</span>
        <img className='sv-logo' src={svLogo} alt='sv-logo.jpg' />
      </h1>
      <ul>
        <li>
          index<span className='html-txt'>.html</span>
        </li>
        <li>
          style<span className='css-txt'>.css</span>
        </li>
        <li>
          script<span className='js-txt'>.js</span>
        </li>
        <li>
          <span className='boot-txt'>Bootstrap</span>
        </li>
        <li>
          <span className='react-txt'>React</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
