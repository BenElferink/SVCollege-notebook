import React, { Component } from 'react';
import IconPlus from './img/plus.svg';
import Notice from './components/Notice';
import Form from './components/Form';

class App extends Component {
  state = {
    toggle: false,
  };

  render() {
    return (
      <div className='app'>
        <img
          src={IconPlus}
          alt='SVG'
          style={{ transform: `rotate(${this.state.toggle ? 135 : 0}deg)` }}
          onClick={() => {
            this.setState({ toggle: !this.state.toggle });
          }}
        />
        {this.state.toggle ? <Form /> : <Notice />}
      </div>
    );
  }
}

export default App;
