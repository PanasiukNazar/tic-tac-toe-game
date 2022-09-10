import React from 'react';
import { OPPONENT_TYPE } from '../constants';

const ChoiceMode = ({ onStartGame }) => {
   return (
      <div className='choice-mode'>
         <button
            className='mode-solo'
            onClick={() => onStartGame(OPPONENT_TYPE.COMPUTER)}
         >
            NEW GAME (VS CPU)
         </button>
         <button
            className='mode-player'
            onClick={() => onStartGame(OPPONENT_TYPE.PLAYER)}
         >
            NEW GAME (VS PLAYER)
         </button>
      </div>
   );
};

export default ChoiceMode;
