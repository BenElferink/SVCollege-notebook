import React, { useState } from 'react';
import LinkBtn from './LinkBtn';

function AddRoom(props) {
  const [type, setType] = useState('Bathroom');
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const handleCreateBtn = () => {
    if (name.length > 0 && name.length <= 5) {
      props.addRoom(type, name, color);
    } else {
      window.alert('Incorrect values, failed to create room.');
    }
  };

  return (
    <div className='add-room'>
      <label>
        Select room type:
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}>
          <option>Bathroom</option>
          <option>Bedroom</option>
          <option>Kitchen</option>
        </select>
      </label>
      <label>
        Create room name:
        <input
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder='5 character(s) limit'
        />
      </label>
      <label>
        Insert color:
        <input
          type='text'
          value={color}
          onChange={(e) => {
            setColor(e.target.value.toLowerCase());
          }}
          placeholder='blue, red, white etc.'
        />
      </label>
      <LinkBtn to='/' txt='Create' onClick={handleCreateBtn} />
      <LinkBtn to='/' txt='Back' className='home-btn' />
    </div>
  );
}

export default AddRoom;
