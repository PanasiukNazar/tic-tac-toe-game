import React from 'react';
import classNames from 'classnames';

const SwitchMark = ({ onToggleMarks, isTicActive }) => {
  return (
    <div className='mark-switch'>
      <div
        className={classNames('switch-tic', { 'active-area': isTicActive })}
        onClick={onToggleMarks}
      >
        <img
          className={classNames('tic-imagen', {
            'active-mark': isTicActive,
          })}
          src='./assets/tic.png'
        />
      </div>

      <div
        className={classNames('switch-tac', {
          'active-area': !isTicActive,
        })}
        onClick={onToggleMarks}
      >
        <img
          className={classNames('tac-imagen', {
            'active-mark': !isTicActive,
          })}
          src='./assets/tac.png'
        />
      </div>
    </div>
  );
};

export default SwitchMark;
