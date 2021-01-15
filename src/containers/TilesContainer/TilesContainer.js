import React from 'react';
import './TilesContainer.scss';
import {connect} from 'react-redux';

class TilesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.selected !== this.props.selected) {
      this.setState({size: this.props.selected}, () => (
        this.createTilesArray(this.props.selected)
      ));
    }
  }

  createTilesArray = (size) => {
    const board = [];
    for(let i = 1; i <= size; i++) {
      const row = [];
      for(let j = 1; j <= size; j++) {
        const tile = {};
        tile.row = i;
        tile.col = j;
        row.push(tile);
      }
      board.push(row);
    }
    return board;
  };

  render() {
    return(
      <section className='tiles-container'>
        <h1>{this.state.size}</h1>
      </section>
    )
  }
};

const mapStateToProps = state => {
  return {
    selected: state.data.selected,
  }
}

export default connect(mapStateToProps)(TilesContainer);
