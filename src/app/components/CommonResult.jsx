import React from 'react';

const CommonResult = ({ title, mark, bgcolor, score }) => {
   return (
      <div className='result-item' style={bgcolor}>
         <div className='item-text'>
            {mark} {title}
         </div>
         <div className='item-counter'>{score}</div>
      </div>
   );
};

export default CommonResult;
