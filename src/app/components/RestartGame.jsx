import React from 'react';

const RestartGame = ({ onToggleModal }) => {
   return (
      <div className='game-restart' onClick={onToggleModal}>
         <img className='restart-icon' src='../assets/restart-game.svg' />
      </div>
   );
};

export default RestartGame;
