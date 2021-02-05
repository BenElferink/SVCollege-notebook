import React from 'react';
import './AddSquare.css';

export default function AddSquare(props) {
  return (
    <div>
      <input id="number" placeholder="number" />
      <input id="color" placeholder="color" />
      <button
        onClick={() => {
          let number = document.getElementById('number').value;
          let color = document.getElementById('color').value;
          props.addSquare(number, color);
        }}
      >
        send
      </button>
    </div>
  );
}
