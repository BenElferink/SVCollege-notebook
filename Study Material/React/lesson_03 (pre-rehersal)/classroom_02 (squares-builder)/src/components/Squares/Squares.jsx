import React from 'react';
import './Squares.css';
import Square from './../Square/Square.jsx';

export default function Squares(props) {
  return (
    <div>
      {props.squares.map((item) => (
        <Square number={item.number} bgColor={item.bgColor} />
      ))}
    </div>
  );
}
