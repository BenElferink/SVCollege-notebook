import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post.js';

function App() {
  var allPosts = [
    {
      title: 'Weather',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus velit, vulputate sed leo a, maximus dapibus dolor. Etiam sagittis auctor mi, faucibus finibus tortor facilisis id. Sed lorem nibh, egestas sit amet elementum non, efficitur nec ex. Sed aliquam nibh eget commodo rhoncus. Nunc maximus placerat purus, placerat feugiat tortor ultricies sed. Maecenas sit amet neque vitae ex accumsan rutrum eget laoreet metus. Cras nec ante nec nunc sodales volutpat. Donec lorem orci, hendrerit eu varius vel, finibus a neque. Maecenas sit amet placerat lorem. Nullam quis mi suscipit, bibendum mi vel, convallis mauris.',
    },
    {
      title: 'News',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus velit, vulputate sed leo a, maximus dapibus dolor. Etiam sagittis auctor mi, faucibus finibus tortor facilisis id. Sed lorem nibh, egestas sit amet elementum non, efficitur nec ex. Sed aliquam nibh eget commodo rhoncus. Nunc maximus placerat purus, placerat feugiat tortor ultricies sed. Maecenas sit amet neque vitae ex accumsan rutrum eget laoreet metus. Cras nec ante nec nunc sodales volutpat. Donec lorem orci, hendrerit eu varius vel, finibus a neque. Maecenas sit amet placerat lorem. Nullam quis mi suscipit, bibendum mi vel, convallis mauris.',
    },
    {
      title: 'Sports',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus velit, vulputate sed leo a, maximus dapibus dolor. Etiam sagittis auctor mi, faucibus finibus tortor facilisis id. Sed lorem nibh, egestas sit amet elementum non, efficitur nec ex. Sed aliquam nibh eget commodo rhoncus. Nunc maximus placerat purus, placerat feugiat tortor ultricies sed. Maecenas sit amet neque vitae ex accumsan rutrum eget laoreet metus. Cras nec ante nec nunc sodales volutpat. Donec lorem orci, hendrerit eu varius vel, finibus a neque. Maecenas sit amet placerat lorem. Nullam quis mi suscipit, bibendum mi vel, convallis mauris.',
    },
    {
      title: 'Celebs',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus velit, vulputate sed leo a, maximus dapibus dolor. Etiam sagittis auctor mi, faucibus finibus tortor facilisis id. Sed lorem nibh, egestas sit amet elementum non, efficitur nec ex. Sed aliquam nibh eget commodo rhoncus. Nunc maximus placerat purus, placerat feugiat tortor ultricies sed. Maecenas sit amet neque vitae ex accumsan rutrum eget laoreet metus. Cras nec ante nec nunc sodales volutpat. Donec lorem orci, hendrerit eu varius vel, finibus a neque. Maecenas sit amet placerat lorem. Nullam quis mi suscipit, bibendum mi vel, convallis mauris.',
    },
    {
      title: 'Tech & Gadgets',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus velit, vulputate sed leo a, maximus dapibus dolor. Etiam sagittis auctor mi, faucibus finibus tortor facilisis id. Sed lorem nibh, egestas sit amet elementum non, efficitur nec ex. Sed aliquam nibh eget commodo rhoncus. Nunc maximus placerat purus, placerat feugiat tortor ultricies sed. Maecenas sit amet neque vitae ex accumsan rutrum eget laoreet metus. Cras nec ante nec nunc sodales volutpat. Donec lorem orci, hendrerit eu varius vel, finibus a neque. Maecenas sit amet placerat lorem. Nullam quis mi suscipit, bibendum mi vel, convallis mauris.',
    },
  ];

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <br />
      <Post title={allPosts[0].title} info={allPosts[0].info} />
      <Post title={allPosts[1].title} info={allPosts[1].info} />
      <Post title={allPosts[2].title} info={allPosts[2].info} />
      <Post title={allPosts[3].title} info={allPosts[3].info} />
      <Post title={allPosts[4].title} info={allPosts[4].info} />
    </div>
  );
}

export default App;
