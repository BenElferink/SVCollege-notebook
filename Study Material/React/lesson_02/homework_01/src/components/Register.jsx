import React, { Component } from 'react';
import './Register.css';

export default class Register extends Component {
  state = {
    uname: '',
    unameColor: '#ccc',
    pass: '',
    passColor: '#ccc',
    mail: '',
    mailColor: '#ccc',
    age: '',
    ageColor: '#ccc',
  };

  bypassStylesheet = (val, inp) => {
    // IF THE INPUT ISN'T EMPTY
    if (val.length !== 0) {
      // KEEP THE ":focus" SETTINGS FROM STYLESHEET, EFFECT ON <label>
      document.getElementById(`${inp}-label`).style.top = '0';
      document.getElementById(`${inp}-label`).style.fontSize = '0.7rem';
    } else {
      // REVERT ABOVE CODE, AND LET STYLESHEET TAKE COMMAND
      document.getElementById(`${inp}-label`).removeAttribute('style');
    }
  };

  unameCheck = (item) => {
    // SET THE VALUE
    let val = item.target.value;
    this.setState({ uname: val });

    // CHANGE COLOR ACCORDING TO VERIFICATIONS
    if (val.length >= 6 && val.length <= 8) {
      this.setState({ unameColor: 'lime' });
    } else if (val.length === 0) {
      this.setState({ unameColor: '#ccc' });
    } else {
      this.setState({ unameColor: 'tomato' });
    }

    // CALL STYLE FUNCTION
    this.bypassStylesheet(val, 'uname');
  };

  passChech = (item) => {
    // SET THE VALUE
    let val = item.target.value;
    this.setState({ pass: val });

    // CHANGE COLOR ACCORDING TO VERIFICATIONS
    if (val.length <= 7 && val.length > 0) {
      this.setState({ passColor: 'lime' });
    } else if (val.length === 0) {
      this.setState({ passColor: '#ccc' });
    } else {
      this.setState({ passColor: 'tomato' });
    }

    // CALL STYLE FUNCTION
    this.bypassStylesheet(val, 'pass');
  };

  mailCheck = (item) => {
    // SET THE VALUE
    let val = item.target.value;
    this.setState({ mail: val });

    // CHANGE COLOR ACCORDING TO VERIFICATIONS
    if (val.charAt(3) === '@') {
      this.setState({ mailColor: 'lime' });
    } else if (val.length === 0) {
      this.setState({ mailColor: '#ccc' });
    } else {
      this.setState({ mailColor: 'tomato' });
    }

    // CALL STYLE FUNCTION
    this.bypassStylesheet(val, 'mail');
  };

  ageCheck = (item) => {
    // SET THE VALUE
    let val = item.target.value;
    this.setState({ age: val });

    // CHANGE COLOR ACCORDING TO VERIFICATIONS
    if (val > 0) {
      this.setState({ ageColor: 'lime' });
    } else if (val.length === 0) {
      this.setState({ ageColor: '#ccc' });
    } else {
      this.setState({ ageColor: 'tomato' });
    }

    // CALL STYLE FUNCTION
    this.bypassStylesheet(val, 'age');
  };

  submit = () => {
    if (
      this.state.unameColor === 'lime' &&
      this.state.passColor === 'lime' &&
      this.state.mailColor === 'lime' &&
      this.state.ageColor === 'lime'
    ) {
      window.alert('Success! welcome to CyberScr!pt');
    } else {
      window.alert('Failed! Please follow the instructions before typing.');
    }
  };

  render() {
    return (
      <div className="Register">
        <form>
          <div className="inp-group">
            <input
              type="text"
              id="uname"
              className="inp"
              placeholder="6-8 characters"
              onChange={this.unameCheck}
            />
            <label htmlFor="uname" id="uname-label">
              Username
            </label>
            <div
              className="inp-line"
              style={{ backgroundColor: this.state.unameColor }}
            ></div>
          </div>
          <div className="inp-group">
            <input
              type="password"
              id="pass"
              className="inp"
              placeholder="up to 7 charachters"
              onChange={this.passChech}
            />
            <label htmlFor="pass" id="pass-label">
              Password
            </label>
            <div
              className="inp-line"
              style={{ backgroundColor: this.state.passColor }}
            ></div>
          </div>
          <div className="inp-group">
            <input
              type="text"
              id="mail"
              className="inp"
              placeholder="'@' at 4th charachter"
              onChange={this.mailCheck}
            />
            <label htmlFor="mail" id="mail-label">
              Email
            </label>
            <div
              className="inp-line"
              style={{ backgroundColor: this.state.mailColor }}
            ></div>
          </div>
          <div className="inp-group">
            <input
              type="number"
              id="age"
              className="inp"
              placeholder="must be over 0 years old"
              onChange={this.ageCheck}
            />
            <label htmlFor="age" id="age-label">
              Age
            </label>
            <div
              className="inp-line"
              style={{ backgroundColor: this.state.ageColor }}
            ></div>
          </div>
          <button className="btn" onClick={this.submit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
