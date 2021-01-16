import React from 'react';

const Tile = ({ row, col, addToHistory, start }) => {
  const mouseHandler = (row, col) => {
    console.log("START", start)
    if(!start) return;
    addToHistory(row, col);
  }
  return (
    <div className='tile' onMouseEnter={() => mouseHandler(row, col)}>

    </div>
  )
};

export default Tile;
