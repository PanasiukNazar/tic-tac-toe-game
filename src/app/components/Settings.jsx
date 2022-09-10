import React from 'react';
import Logo from './Logo';
import ChoiceMark from './ChoiceMark';
import ChoiceMode from './ChoiceMode';

const Settings = ({ isTicActive, onToggleMarks, onStartGame }) => {
   return (
      <div className='settings'>
         <Logo />
         <ChoiceMark onToggleMarks={onToggleMarks} isTicActive={isTicActive} />
         <ChoiceMode onStartGame={onStartGame} />
      </div>
   );
};

export default Settings;
