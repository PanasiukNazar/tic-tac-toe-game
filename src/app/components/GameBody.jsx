import React from 'react';
import MarkCheckbox from './MarkCheckbox.jsx';

const GameBody = ({ checkboxField, setMarkIntoCheckbox }) => {
   return (
      <div className='game-body'>
         {Array.from(checkboxField).map((mark, index) => {
            return (
               <MarkCheckbox
                  key={index}
                  mark={mark}
                  index={index}
                  setMarkIntoCheckbox={setMarkIntoCheckbox}
               />
            );
         })}
      </div>
   );
};

export default GameBody;
