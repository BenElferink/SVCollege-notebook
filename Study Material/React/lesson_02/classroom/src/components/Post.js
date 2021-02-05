import React from 'react';

export default function Post(props) {
  return (
    <div>
      <h1>{props.ttl}</h1>
      <h2>{props.inf}</h2>
    </div>
  );
}
