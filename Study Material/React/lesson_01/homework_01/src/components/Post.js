import React from 'react';

export default function Post(props) {
  return (
    <div
      style={{
        border: '0.5px solid white',
        borderRadius: '30px',
        margin: '3vmin',
        padding: '2vmin',
        boxShadow: '0 0 10px 3px #81d7f7',
      }}
    >
      <h1>{props.title}</h1>
      <br />
      <p>{props.info}</p>
    </div>
  );
}
