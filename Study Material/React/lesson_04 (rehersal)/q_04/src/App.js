import React, { Component } from 'react';
import AddVehicle from './components/AddVehicle';
import DisplayVehicle from './components/DisplayVehicle';

class App extends Component {
  state = {
    cars: [
      {
        type: 'Volkswagen',
        color: 'black',
      },
      {
        type: 'Audi',
        color: 'grey',
      },
      {
        type: 'Volvo',
        color: 'teal',
      },
      {
        type: 'Suzuki',
        color: 'orange',
      },
    ],
  };

  add = (type, color) => {
    let newArray = this.state.cars.slice();
    newArray.unshift({ type, color });
    this.setState({ cars: newArray });
  };

  render() {
    return (
      <div className='app'>
        <AddVehicle add={this.add} />
        <DisplayVehicle list={this.state.cars} />
      </div>
    );
  }
}

export default App;
