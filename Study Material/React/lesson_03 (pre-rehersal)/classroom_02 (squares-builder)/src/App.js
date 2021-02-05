import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Square from './components/Square/Square.jsx';
import Squares from './components/Squares/Squares.jsx';
import AddSquare from './components/AddSquare/AddSquare.jsx';

function App() {
  const [squares, setSquares] = useState([
    { number: 1, bgColor: 'red' },
    { number: 2, bgColor: 'green' },
  ]);

  const addSquare = (number, color) => {
    let obj = { number: number, bgColor: color };
    setSquares([...squares, obj]);
  };

  return (
    <div className="App">
      <Header />
      <Squares squares={squares} />
      <AddSquare addSquare={addSquare} />
    </div>
  );
}

export default App;
