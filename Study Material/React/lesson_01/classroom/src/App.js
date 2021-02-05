import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js'
import Body2 from './components/Body2.js'
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  let x = 7;
  let name = 'Ben';
  let y = 55

  let arr = [{ food: 'pizza', drink: 'cola' }, { food: 'banana', drink: 'fanta' }, { food: 'burger', drink: 'beer' }];

  return (
    <div className="App">
      Hello World
      <Header age={y} />
      <p style={{ width: "100%", height: "2px", backgroundColor: "black" }}></p>
      <Body num={x} myname={name} />
      <p style={{ width: "100%", height: "2px", backgroundColor: "black" }}></p>
      <Body2 food={arr[0].food} drink={arr[0].drink} />
      <Body2 food={arr[1].food} drink={arr[1].drink} />
      <Body2 food={arr[2].food} drink={arr[2].drink} />
    </div>
  );

}



export default App;
