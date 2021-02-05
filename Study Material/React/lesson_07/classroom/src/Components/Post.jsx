import React from 'react';
import { Consumer } from '../ContextAPI';

export default function Post({ post }) {
  return (
    <div>
      <h6>{post.title}</h6>
      <p>{post.body}</p>
      <Consumer>{(value) => <span>{value}</span>}</Consumer>
    </div>
  );
}
