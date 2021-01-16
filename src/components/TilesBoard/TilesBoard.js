import React from 'react';
import './TilesBoard.scss';
import Tile from '../Tile/Tile';

const TilesBoard = ({ tiles, addToHistory }) => {
  console.log('TILES', tiles)
  return (
    <div className='tiles-board'>
      {tiles.length && tiles.map(row => {
        return (
          <div className='row'>
            {row.map(tile => {
              return <Tile row={tile.row} col={tile.col} addToHistory={addToHistory} />
            })}
          </div>
        )
      })}
    </div>
  )
};

export default TilesBoard;
