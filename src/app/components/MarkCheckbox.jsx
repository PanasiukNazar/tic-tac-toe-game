import React from 'react';

const MarkCheckbox = ({ mark, index, setMarkIntoCheckbox }) => {
  return (
    <div className='mark-checkbox' onClick={() => setMarkIntoCheckbox(index)}>
      <img
        className='checkbox-item'
        src={mark === null ? '' : `./assets/${mark}.png`}
      />
    </div>
  );
};

export default MarkCheckbox;
