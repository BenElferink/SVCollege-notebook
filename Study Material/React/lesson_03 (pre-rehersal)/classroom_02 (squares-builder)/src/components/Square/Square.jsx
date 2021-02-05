import React from 'react';
import './Square.css';

export default function Square(props) {
  return (
    <div className="box" style={{ backgroundColor: props.bgColor }}>
      {props.number}
    </div>
  );
}
