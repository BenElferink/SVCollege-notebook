import React, { useState, useEffect } from 'react';
import Result from './Result';

export default function Game({ player, setPlayer, quitGame }) {
  // prettier-ignore
  const allCards = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13]
  const [computerCards, setComputerCards] = useState(['Milhama']);
  const [playerCards, setPlayerCards] = useState(['Milhama']);
  const [computerWins, setComputerWins] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);
  const [finish, setFinish] = useState(false);

  // this side effect shuffles & deals all cards each time the 'player' is set.
  // 'player' is set when selecting or creating a player in 'Users.jsx',
  // or by finishing the game (another side effect, see below - line 42)
  useEffect(() => {
    // first we copy/create all necessary card arrays
    let copyAllCards = [...allCards];
    let copyComputerCards = ['Milhama'];
    let copyPlayerCards = ['Milhama'];
    // then we loop through all cards until none are left
    while (copyAllCards.length !== 0) {
      // randomly selecting a card, and pushing it to computer
      let randomIndex = Math.floor(Math.random() * copyAllCards.length);
      let randomCard = copyAllCards[randomIndex];
      copyComputerCards.push(randomCard);
      copyAllCards.splice(randomIndex, 1);
      // randomly selecting a card, and pushing it to player
      randomIndex = Math.floor(Math.random() * copyAllCards.length);
      randomCard = copyAllCards[randomIndex];
      copyPlayerCards.push(randomCard);
      copyAllCards.splice(randomIndex, 1);
    }
    // then we save 2 out of 3 manipulated arrays
    setComputerCards(copyComputerCards);
    setPlayerCards(copyPlayerCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player]);

  // this side effect checks which side has the higher card and keeps track of them,
  // unless there are no cards left, thn this will toggle 'finish' to 'true'
  useEffect(() => {
    if (computerCards[0] > playerCards[0]) {
      setComputerWins(computerWins + 1);
    } else if (playerCards[0] > computerCards[0]) {
      setPlayerWins(playerWins + 1);
    } else if (computerCards.length + playerCards.length === 0) {
      setFinish(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computerCards, playerCards]);

  // this side effect updates user data upon finishing the game,
  // this will also trigger a re-shuffle for the next game (see line 16)
  useEffect(() => {
    if (finish) {
      let copyPlayer = { ...player };
      copyPlayer.played += 1;
      if (computerWins > playerWins) {
        copyPlayer.losses += 1;
      } else if (playerWins > computerWins) {
        copyPlayer.wins += 1;
      }
      setPlayer(copyPlayer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finish]);

  // this function removes used cards from both decks
  const clickNext = () => {
    let copyComputerCards = [...computerCards];
    let copyPlayerCards = [...playerCards];
    copyComputerCards.shift();
    copyPlayerCards.shift();
    setComputerCards(copyComputerCards);
    setPlayerCards(copyPlayerCards);
  };

  const remaining = computerCards.length + playerCards.length - 2;
  return finish ? (
    <Result
      computerWins={computerWins}
      playerWins={playerWins}
      playAgain={() => {
        setFinish(false);
        setComputerWins(0);
        setPlayerWins(0);
      }}
      quitGame={quitGame}
    />
  ) : (
    <div className='game'>
      <div>
        <div className='card'>
          <span>{computerCards[0]}</span>
        </div>
        <p>Computer - {computerWins}</p>
      </div>
      VS.
      <div>
        <p>You - {playerWins}</p>
        <div className='card'>
          <span>{playerCards[0]}</span>
        </div>
      </div>
      <div>
        <button onClick={clickNext}>
          {remaining === 0
            ? 'Finish'
            : computerCards[0] === 'Milhama'
            ? 'Start'
            : 'Next'}
        </button>
        <p className='remaining'>cards left: {remaining}</p>
      </div>
    </div>
  );
}
