import React, { useState, useEffect } from 'react';
import Users from './components/Users';
import Game from './components/Game';
import './style/style.css';

export default function App() {
  const [player, setPlayer] = useState({ id: 0 });
  const [users, setUsers] = useState(
    checkLocalStorage('Milhama_WebApp__dev_Ben_Elferink')
  );

  // this side effect keeps localStorage updated with each change to 'users'
  useEffect(() => {
    localStorage.setItem(
      'Milhama_WebApp__dev_Ben_Elferink',
      JSON.stringify(users)
    );
  }, [users]);

  // this side effect updates 'users' with changes made to 'player'
  useEffect(() => {
    let copyUsers = [...users];
    for (let i = 0; i < copyUsers.length; i++) {
      if (copyUsers[i].id === player.id) {
        copyUsers[i] = player;
      }
    }
    setUsers(copyUsers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player]);

  return (
    <div className='app'>
      {player.id === 0 ? (
        <Users
          users={users}
          addNew={(user) => {
            setUsers([...users, user]);
          }}
          select={(player) => {
            setPlayer(player);
          }}
        />
      ) : (
        <Game
          player={player}
          setPlayer={setPlayer}
          quitGame={() => {
            setPlayer({ id: 0 });
          }}
        />
      )}
    </div>
  );
}

// this function will return existing storage,
// if it doesn't exist, initialize first storage setup
function checkLocalStorage(key) {
  let storage = JSON.parse(localStorage.getItem(key));

  if (storage == null) {
    let played = Math.floor(Math.random() * (10 - 5) + 5);
    let wins = Math.floor(Math.random() * (played - 1) + 1);
    let losses = played - wins;

    return [
      {
        id: 1,
        username: 'AdminPwn',
        played: played,
        wins: wins,
        losses: losses,
      },
    ];
  } else {
    return storage;
  }
}
