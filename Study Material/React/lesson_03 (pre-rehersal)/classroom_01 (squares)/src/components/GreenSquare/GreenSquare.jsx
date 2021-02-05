import React, { Component } from 'react';
import './GreenSquare.css';

export default class GreenSquare extends Component {
  state = {
    bgColor: 'white',
  };

  componentDidMount() {
    console.log('GreenSquare DidMount');
  }

  componentDidUpdate() {
    console.log('GreenSquare DidUpdate');
  }

  changeToGreen = () => {
    if (this.state.bgColor === 'white') {
      this.setState({ bgColor: 'green' });
    } else {
      this.setState({ bgColor: 'white' });
    }
  };

  render() {
    return (
      <div className="main">
        <div
          className="green-box"
          style={{ backgroundColor: this.state.bgColor }}
        ></div>
        <button onClick={this.changeToGreen}>Paint green</button>
      </div>
    );
  }
}
