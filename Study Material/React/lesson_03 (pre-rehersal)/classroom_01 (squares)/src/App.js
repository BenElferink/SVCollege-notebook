import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import GreenSquare from './components/GreenSquare/GreenSquare.jsx';
import YellowSquare from './components/YellowSquare/YellowSquare.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <GreenSquare />
      <YellowSquare />
    </div>
  );
}

export default App;
