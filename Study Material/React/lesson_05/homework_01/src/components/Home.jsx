import React from 'react';
import LinkBtn from './LinkBtn';

function Home(props) {
  return (
    <div className='home'>
      <nav>
        {props.rooms.map((room, i) => (
          <LinkBtn
            to={`/${room.name}`}
            txt={room.name}
            style={{
              backgroundColor: room.color,
            }}
            className='room-btn'
            key={i}
          />
        ))}
      </nav>
      <LinkBtn to='/add-room' txt='Create New Room' />
    </div>
  );
}

export default Home;
