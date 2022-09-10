import React from 'react';
import classNames from 'classnames';

const ChosenMark = ({ isTicActive }) => {
   return (
      <div className='game-chosen-mark'>
         <div className='mark-list'>
            <img
               className={classNames('list-tic-item', { active: isTicActive })}
               src='../assets/chosen-tic.png'
            />
            <img
               className={classNames('list-tic-item', { active: !isTicActive })}
               src='../assets/chosen-tac.png'
            />
         </div>
         <p className='mark-turn'>TURN</p>
      </div>
   );
};

export default ChosenMark;
