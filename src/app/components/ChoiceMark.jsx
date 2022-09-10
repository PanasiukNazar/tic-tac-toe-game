import React from 'react';
import SwitchMark from './SwitchMark.jsx';

const ChoiceMark = ({ onToggleMarks, isTicActive }) => {
   return (
      <div className='choice-mark'>
         <p className='choice-logo'>PICK PLAYER 1'S MARK</p>
         <SwitchMark onToggleMarks={onToggleMarks} isTicActive={isTicActive} />
         <p className='choice-hint'>REMEMBER : X GOES FIRST</p>
      </div>
   );
};

export default ChoiceMark;
