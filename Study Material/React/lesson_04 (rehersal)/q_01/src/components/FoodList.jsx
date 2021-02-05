import React, { useState, useEffect } from 'react';

function FoodList(props) {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput('');
  }, [props.list.length]);

  return (
    <div className='list-group'>
      <h2>{props.title}:</h2>
      <ul>
        {props.list.map((item, i) => (
          <li key={i}>
            <span
              onClick={() => {
                props.removeItem(i);
              }}>
              &times;
            </span>
            {item}
          </li>
        ))}
        <li>
          <input
            type='text'
            placeholder='new product'
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              props.addItem(input);
            }}>
            add
          </button>
        </li>
      </ul>
    </div>
  );
}

export default FoodList;
