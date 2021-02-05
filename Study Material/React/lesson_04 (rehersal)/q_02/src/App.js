import React, { Component } from 'react';
import CountryList from './components/CountryList';

class App extends Component {
  state = {
    countries: [
      'Canada',
      'Cyprus',
      'Israel',
      'Netherlands',
      'South Africa',
      'Sweden',
      'United Arab Emirates',
      'United States',
    ],
  };

  render() {
    return (
      <div className='app'>
        <h1>
          <u>Countries:</u>
        </h1>
        <CountryList list={this.state.countries} />
      </div>
    );
  }
}

export default App;
