import React, { Component } from 'react';
import './YellowSquare.css';

export default class YellowSquare extends Component {
  state = {
    bgColor: 'white',
  };

  componentDidMount() {
    console.log('YelloWsquare DidMount');
  }

  componentDidUpdate() {
    console.log('YellowSquare DidUpdate');
  }

  changeToYellow = () => {
    if (this.state.bgColor === 'white') {
      this.setState({ bgColor: 'yellow' });
    } else {
      this.setState({ bgColor: 'white' });
    }
  };

  render() {
    return (
      <div className="main">
        <div
          className="yellow-box"
          style={{ backgroundColor: this.state.bgColor }}
        ></div>
        <button onClick={this.changeToYellow}>Paint yellow</button>
      </div>
    );
  }
}
