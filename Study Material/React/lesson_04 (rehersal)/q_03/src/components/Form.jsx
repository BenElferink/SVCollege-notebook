import React, { Component } from 'react';

export class Form extends Component {
  state = {
    username: '',
    password: '',
  };

  colorUsername = () => {
    let uname = this.state.username;
    if (uname.length === 0) {
      return '#000';
    } else if (uname.length >= 10) {
      return '#00ff00';
    } else {
      return '#ff6347';
    }
  };

  colorPassword = () => {
    let pass = this.state.password;
    if (pass.length === 0) {
      return '#000';
    } else if (pass.charAt(0) >= 'A' && pass.charAt(0) <= 'Z') {
      return '#00ff00';
    } else {
      return '#ff6347';
    }
  };

  validate = () => {
    let uname = this.state.username;
    let pass = this.state.password;
    if (uname.length >= 10 && pass.charAt(0) >= 'A' && pass.charAt(0) <= 'Z') {
      window.alert('success');
    } else {
      window.alert('fail');
    }
  };

  render() {
    return (
      <div className='form'>
        <div className='inp-group'>
          <input
            type='text'
            name='uname'
            placeholder='At least 10 characters'
            value={this.state.username}
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
            style={{ borderColor: this.colorUsername() }}
          />
          <label htmlFor='uname'>Username:</label>
        </div>
        <div className='inp-group'>
          <input
            type='password'
            name='pass'
            placeholder='Must begin with CAPS'
            value={this.state.password}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
            style={{ borderColor: this.colorPassword() }}
          />
          <label htmlFor='pass'>Password:</label>
        </div>
        <button onClick={this.validate}>Check</button>
      </div>
    );
  }
}

export default Form;
