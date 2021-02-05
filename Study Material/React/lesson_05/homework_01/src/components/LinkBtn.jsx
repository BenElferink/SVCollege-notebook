import React from 'react';
import { Link } from 'react-router-dom';

function LinkBtn(props) {
  return (
    <Link to={props.to}>
      <button
        className={props.className}
        style={props.style}
        onClick={props.onClick}>
        {props.txt}
      </button>
    </Link>
  );
}

export default LinkBtn;
