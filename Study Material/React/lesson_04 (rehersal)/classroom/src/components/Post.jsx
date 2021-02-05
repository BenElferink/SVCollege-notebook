import React from 'react';

export default function Post(props) {
  return (
    <div className='post'>
      <span
        onClick={() => {
          props.remove(props.index);
        }}>
        &times;
      </span>
      <h2>{props.name}</h2>
      <h4>
        <u>price</u>: ${props.price}
      </h4>
      <p>{props.info}</p>
    </div>
  );
}
