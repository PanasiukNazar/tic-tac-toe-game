import React from 'react';
import Logo from './Logo.jsx';
import ChosenMark from './ChosenMark';
import RestartGame from './RestartGame.jsx';

const GameHeader = ({ isTicActive, onToggleModal }) => {
   return (
      <div className='game-header'>
         <Logo />
         <ChosenMark isTicActive={isTicActive} />
         <RestartGame onToggleModal={onToggleModal} />
      </div>
   );
};

export default GameHeader;
