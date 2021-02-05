import React, { Component } from 'react';

export default class NewPost extends Component {
  // rconst -> constructor
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      info: '',
      bgColorTitle: 'white',
      bgColorInfo: 'white',
    };
  }

  validTitle = (item) => {
    this.setState({ title: item.target.value });

    if (item.target.value.length > 5) {
      this.setState({ bgColorTitle: 'lime' });
    } else {
      this.setState({ bgColorTitle: 'tomato' });
    }
  };

  validInfo = (item) => {
    this.setState({ info: item.target.value });

    if (item.target.value.length > 5) {
      this.setState({ bgColorInfo: 'lime' });
    } else {
      this.setState({ bgColorInfo: 'tomato' });
    }
  };

  submit = () => {
    window.alert(`Title: ${this.state.title} Info: ${this.state.info}`);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.validTitle}
          placeholder="Title"
          style={{ backgroundColor: this.state.bgColorTitle }}
        />
        <br />
        <input
          onChange={this.validInfo}
          placeholder="Info"
          style={{ backgroundColor: this.state.bgColorInfo }}
        />
        <br />
        {this.props.x}
        <br />
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}
