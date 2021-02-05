import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import './style/style.css';

function App() {
  const name = 'hello world';

  return (
    <div className='app'>
      <Header />
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={() => <Page1 name={name} />} />
          <Route exact path='/page2' component={Page2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
