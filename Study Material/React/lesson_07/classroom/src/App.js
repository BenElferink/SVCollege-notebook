import React from 'react';
import { Provider } from './ContextAPI';
import UserList from './Components/UserList';

function App() {
  const msg = 'Consumed by Context API';

  return (
    <div className='App'>
      <Provider value={msg}>
        <UserList />
      </Provider>
    </div>
  );
}

export default App;
