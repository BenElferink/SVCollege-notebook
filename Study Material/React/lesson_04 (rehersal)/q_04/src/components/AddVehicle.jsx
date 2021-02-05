import React, { Component } from 'react';

export class AddVehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      color: '',
    };
  }

  render() {
    return (
      <div className='add-vehicle'>
        <h1>Add a vehicle</h1>
        <input
          type='text'
          placeholder='car type (audi, bmw, etc...)'
          value={this.state.type}
          onChange={(e) => {
            this.setState({ type: e.target.value });
          }}
        />
        <input
          type='text'
          placeholder='car color (blue, red, etc...)'
          value={this.state.color}
          onChange={(e) => {
            this.setState({ color: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.props.add(this.state.type, this.state.color);
            this.setState({ type: '', color: '' });
          }}>
          Add
        </button>
      </div>
    );
  }
}

export default AddVehicle;
