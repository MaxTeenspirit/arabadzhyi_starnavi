import React from 'react';

const Tile = ({ row, col, addToHistory, start }) => {
  const mouseHandler = (row, col) => {
    if(!start) return;
    addToHistory(row, col);
  }
  return (
    <div className={`tile ${start ? 'active' : ''}`} onMouseEnter={() => mouseHandler(row, col)} />
  )
};

export default Tile;
