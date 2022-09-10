import React from 'react';
import CommomModal from './CommonModal';

const RestartModal = ({ onCancel, onRestart }) => {
   return (
      <CommomModal
         cancelButtonText='No, cancel'
         submitButtonText='Yes, restart'
         onCancel={onCancel}
         onSubmit={onRestart}
      >
         <div className='modal-large-text-block'>
            <p className='modal-large-text'>RESTART GAME?</p>
         </div>
      </CommomModal>
   );
};

export default RestartModal;
