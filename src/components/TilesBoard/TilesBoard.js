import React from 'react';
import './TilesBoard.scss';
import Tile from '../Tile/Tile';

const TilesBoard = ({ tiles, addToHistory, start }) => {
  return (
    <div className='tiles-board'>
      {tiles.length && tiles.map((row, index) => {
        return (
          <div key={index} className='row'>
            {row.map(tile => {
              return <Tile key={`${index}${tile.col}`} row={tile.row} col={tile.col} addToHistory={addToHistory} start={start} />
            })}
          </div>
        )
      })}
    </div>
  )
};

export default TilesBoard;
