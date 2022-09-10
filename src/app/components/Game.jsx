import React from 'react';
import GameHeader from './GameHeader.jsx';
import GameBody from './GameBody.jsx';
import GameFooter from './GameFooter.jsx';

const Game = ({
   score,
   isTicActive,
   onToggleModal,
   checkboxField,
   isPlayerModeActive,
   setMarkIntoCheckbox,
}) => {
   return (
      <div>
         <GameHeader isTicActive={isTicActive} onToggleModal={onToggleModal} />
         <GameBody
            checkboxField={checkboxField}
            setMarkIntoCheckbox={setMarkIntoCheckbox}
         />
         <GameFooter
            score={score}
            isTicActive={isTicActive}
            isPlayerModeActive={isPlayerModeActive}
         />
      </div>
   );
};

export default Game;
