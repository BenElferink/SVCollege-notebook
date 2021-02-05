import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Exchange from './components/Exchange';
import Update from './components/Update';
import './style/style.css';

function App() {
  const [allCurrencies, setAllCurrencies] = useState([
    { type: 'Shekel', value: 1 },
    { type: 'US Dollar', value: 4 },
    { type: 'Euro', value: 5 },
  ]);
  const [exchangeHistory, setExchangeHistory] = React.useState([]);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={() => <Exchange allCurrencies={allCurrencies} exchangeHistory={exchangeHistory} setExchangeHistory={setExchangeHistory} />} />
          <Route exact path='/update' component={() => <Update internalState={[allCurrencies, setAllCurrencies]} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
