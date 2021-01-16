import React from 'react';
import './HistoryItem.scss';

const HistoryItem = ({row, col}) => {
  return(
    <div className='history-item'>
      <div className='row-title'>{`row ${row}`}</div>
      <div className='col-title'>{`col ${col}`}</div>
    </div>
  )
};

export default HistoryItem;
