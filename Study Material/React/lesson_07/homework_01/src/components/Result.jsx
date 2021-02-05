import React from 'react';

export default function Result({
  computerWins,
  playerWins,
  playAgain,
  quitGame,
}) {
  return (
    <div className='result'>
      <p>
        {computerWins > playerWins
          ? 'You lose...'
          : playerWins > computerWins
          ? 'You win!'
          : "It's a tie..."}
        <br />
        {playerWins} - {computerWins}
      </p>
      <div className='col'>
        <button onClick={playAgain}>Play Again</button>
        <button onClick={quitGame}>Change User</button>
      </div>
    </div>
  );
}
