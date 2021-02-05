import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/style.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Manager from './components/Manager';

function App() {
  const [employees, setEmployees] = useState([]);
  const [loggedEmployee, setLoggedEmployee] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 11122,
      name: 'Green Box',
      forklift: false,
      placed: false,
    },
    {
      id: 22554,
      name: 'Green Box',
      forklift: false,
      placed: false,
    },
    {
      id: 66698,
      name: 'Blue Box',
      forklift: true,
      placed: false,
    },
    {
      id: 78544,
      name: 'Red Box',
      forklift: false,
      placed: false,
    },
    {
      id: 69875,
      name: 'Red Box',
      forklift: false,
      placed: false,
    },
  ]);

  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={() => <Signup employees={employees} setEmployees={setEmployees} />} />
        <Route exact path='/login' component={() => <Login employees={employees} setEmployees={setEmployees} setLoggedEmployee={setLoggedEmployee} />} />
        <Route
          exact
          path='/welcome'
          component={() => (
            <Welcome employees={employees} setEmployees={setEmployees} loggedEmployee={loggedEmployee} setLoggedEmployee={setLoggedEmployee} products={products} setProducts={setProducts} />
          )}
        />
        <Route exact path='/manager' component={() => <Manager employees={employees} setLoggedEmployee={setLoggedEmployee} />} />
      </Router>
    </div>
  );
}

export default App;
