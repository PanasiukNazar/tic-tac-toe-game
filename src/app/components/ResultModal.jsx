import React from 'react';
import classNames from 'classnames';
import CommomModal from './CommonModal.jsx';
import ModalResultMark from './ModalResultMark.jsx';
import { AVAILABLE_TITLES } from '../constants.js';

const getHeaderText = ({ isPlayer1Winner, isComputerOpponent }) => {
   if (isComputerOpponent) {
      return isPlayer1Winner ? 'You won!' : 'Oh no, you lost...';
   }

   return isPlayer1Winner ? 'Player 1 won!' : 'Player 2 won!';
};

const ResultModal = ({
   winner,
   isComputerOpponent,
   isPlayer1Winner,
   isTie,
   onFinishGame,
   onNextRound,
}) => {
   return (
      <CommomModal
         cancelButtonText='Quit'
         submitButtonText='Next round'
         onCancel={onFinishGame}
         onSubmit={onNextRound}
      >
         {winner ? (
            <div className='modal-header-text'>
               <p className='modal-text-result'>
                  {getHeaderText({
                     isComputerOpponent,
                     isPlayer1Winner,
                  })}
               </p>
            </div>
         ) : null}

         <ModalResultMark
            winner={winner}
            titleTie={isTie ? AVAILABLE_TITLES.TIE : ''}
            title={winner ? AVAILABLE_TITLES.TAKEROUND : ''}
         />
      </CommomModal>
   );
};

export default ResultModal;
