import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Room from './components/Room';
import AddRoom from './components/AddRoom';
import './style/style.css';

function App() {
  const [rooms, setRooms] = useState([
    {
      name: 'MyBed',
      type: 'Bedroom',
      color: 'skyblue',
      products: [
        {
          type: 'Lamp',
          active: false,
        },
        {
          type: 'Air Conditioner',
          active: false,
        },
        {
          type: 'Stereo System',
          active: true,
        },
      ],
    },
    {
      name: 'WC',
      type: 'Bathroom',
      color: 'limegreen',
      products: [
        {
          type: 'Lamp',
          active: false,
        },
        {
          type: 'Boiler',
          active: true,
        },
      ],
    },
    {
      name: 'Eat',
      type: 'Kitchen',
      color: 'orange',
      products: [
        {
          type: 'Lamp',
          active: false,
        },
      ],
    },
    {
      name: 'GfBed',
      type: 'Kitchen',
      color: 'salmon',
      products: [
        {
          type: 'Lamp',
          active: true,
        },
        {
          type: 'Lamp',
          active: true,
        },
        {
          type: 'Air Conditioner',
          active: false,
        },
        {
          type: 'Stereo System',
          active: false,
        },
      ],
    },
  ]);

  const addRoom = (type, name, color) => {
    let newArray = [...rooms, { name, type, color, products: [] }];
    setRooms(newArray);
  };

  const addProduct = (product, roomIndex) => {
    let newArray = [...rooms];
    newArray[roomIndex].products.push(product);
    setRooms(newArray);
  };

  const toggleProduct = (roomIndex, productIndex) => {
    let newArray = [...rooms];
    newArray[roomIndex].products[productIndex].active = !newArray[roomIndex]
      .products[productIndex].active;
    setRooms(newArray);
  };

  return (
    <div className='app'>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={() => <Home rooms={rooms} />} />
          {rooms.map((room, i) => (
            <Route
              exact
              path={`/${room.name}`}
              component={() => (
                <Room
                  room={room}
                  index={i}
                  addProduct={addProduct}
                  toggleProduct={toggleProduct}
                />
              )}
              key={i}
            />
          ))}
          <Route
            exact
            path='/add-room'
            component={() => <AddRoom addRoom={addRoom} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
