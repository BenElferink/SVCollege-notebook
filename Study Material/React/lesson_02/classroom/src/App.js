import React from 'react';
import './App.css';
import Post from './components/Post';
import NewPost from './components/NewPost';

function App() {
  var name = 'Ben Elferink';
  var postList = [
    { title: 'Israel', info: 'Jerusalem' },
    { title: 'Japan', info: 'Tokyo' },
    { title: 'Italy', info: 'Rome' },
  ];

  return (
    <div className="App">
      <h1>React - lesson 2</h1>

      <NewPost x={name} />

      {/* <Post ttl={postList[0].title} inf={postList[0].info} />
      <Post ttl={postList[1].title} inf={postList[1].info} />
      <Post ttl={postList[2].title} inf={postList[2].info} /> */}
      {postList.map((item) => {
        return <Post ttl={item.title} inf={item.info} />;
      })}
    </div>
  );
}

export default App;
