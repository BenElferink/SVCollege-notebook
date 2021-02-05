import React, { useState } from 'react';
import PostList from './PostList';

export default function User({ user }) {
  const [show, toggleShow] = useState(false);

  return (
    <div>
      <h3>name: {user.name}</h3>
      <h5>email: {user.email}</h5>
      <h5>website: {user.website}</h5>
      <button
        onClick={() => {
          toggleShow(!show);
        }}>
        POSTS
      </button>
      {show && <PostList userId={user.id} />}
    </div>
  );
}
