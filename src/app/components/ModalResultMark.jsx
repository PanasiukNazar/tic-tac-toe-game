import React from 'react';
import classNames from 'classnames';
import { AVAILABLE_MARKS } from '../constants';

const ModalResultMark = ({ title, titleTie, winner }) => {
  return (
    <div className='modal-large-text-block'>
      {winner ? <img class='mark-img' src={`./assets/${winner}.png`} /> : null}
      <p
        className={classNames('modal-large-text', {
          tieColor: titleTie,
          tacColor: winner === AVAILABLE_MARKS.TAC,
        })}
      >
        {title}
        {titleTie}
      </p>
    </div>
  );
};

export default ModalResultMark;
