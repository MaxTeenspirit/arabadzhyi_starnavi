import React from 'react';

const Tile = ({ row, col, addToHistory }) => {
  const mouseHandler = (row, col) => {
    addToHistory(row, col);
  }
  return (
    <div className='tile' onMouseEnter={() => mouseHandler(row, col)}>

    </div>
  )
};

export default Tile;
