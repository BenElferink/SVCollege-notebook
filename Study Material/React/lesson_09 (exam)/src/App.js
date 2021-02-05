import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UsersContext } from './ContextAPI';
import './style/style.css';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Manager from './components/Manager';

function App() {
  const [users] = useContext(UsersContext); // state at ContactAPI.js --> Provider at index.js
  const [loggedInUser, setLoggedInUser] = useState({}); // verifies that the user is logged in,
  // --> I am doing this so a user cannot manually type the link and bypass the login steps to view the page

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={() => <HomePage setLoggedInUser={setLoggedInUser} />} />
          <Route exact path='/admin' component={() => <Manager />} />
          <Route exact path='/register' component={() => <Register />} />
          <Route exact path='/edit' component={() => <Register loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
          {users.map((user) => (
           <Route key={user.id} path={`/${user.username}`} component={() => <Welcome user={user} loggedState={[loggedInUser, setLoggedInUser]} />} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
