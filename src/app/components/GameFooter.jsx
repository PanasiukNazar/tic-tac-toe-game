import React from 'react';
import CommonResult from './CommonResult.jsx';
import { AVAILABLE_TITLES } from '../constants.js';

const GameFooter = ({ score, isTicActive, isPlayerModeActive }) => {
   const { ticScore, tacScore, ties } = score;

   return (
      <div className='game-footer'>
         <CommonResult
            score={ticScore}
            mark={isTicActive ? 'X' : 'O'}
            title={
               !isPlayerModeActive
                  ? AVAILABLE_TITLES.YOU
                  : AVAILABLE_TITLES.FIRSTPLAYER
            }
            bgcolor={{ backgroundColor: '#31C3BD' }}
         />
         <CommonResult
            score={ties}
            title='TIES'
            bgcolor={{ backgroundColor: '#A8BFC9' }}
         />
         <CommonResult
            score={tacScore}
            mark={isTicActive ? 'O' : 'X'}
            title={
               !isPlayerModeActive
                  ? AVAILABLE_TITLES.CPU
                  : AVAILABLE_TITLES.SECONDPLAYER
            }
            bgcolor={{ backgroundColor: '#F2B137' }}
         />
      </div>
   );
};

export default GameFooter;
