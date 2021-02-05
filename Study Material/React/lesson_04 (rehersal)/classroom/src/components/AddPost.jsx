import React, { Component } from 'react';

export default class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: '',
      info: '',
    };
  }

  handleState = (e) => {
    switch (e.target.id) {
      case 'name':
        this.setState({ name: e.target.value });
        break;

      case 'price':
        this.setState({ price: e.target.value });
        break;

      case 'info':
        this.setState({ info: e.target.value });
        break;

      default:
        console.warn('DEV ERROR');
        break;
    }
  };

  handleSubmit = () => {
    this.props.add(this.state.name, this.state.price, this.state.info);
    this.setState({ name: '', price: '', info: '' });
  };

  render() {
    return (
      <div className='form'>
        <h1>Add new post</h1>
        <input
          type='text'
          id='name'
          placeholder='name'
          onChange={this.handleState}
          value={this.state.name}
        />
        <input
          type='text'
          id='price'
          placeholder='price'
          onChange={this.handleState}
          value={this.state.price}
        />
        <input
          type='text'
          id='info'
          placeholder='info'
          onChange={this.handleState}
          value={this.state.info}
        />
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}
