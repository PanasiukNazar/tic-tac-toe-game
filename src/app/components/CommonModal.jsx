import React from 'react';

const CommomModal = (props) => {
   return (
      <div className='modal-container'>
         <div className='modal'>
            {props.children}
            <div className='modal-buttons'>
               <button className='button-cancel' onClick={props.onCancel}>
                  {props.cancelButtonText}
               </button>
               <button className='button-start' onClick={props.onSubmit}>
                  {props.submitButtonText}
               </button>
            </div>
         </div>
      </div>
   );
};

export default CommomModal;
