import React from 'react';
import './TilesContainer.scss';
import {connect} from 'react-redux';
import TilesBoard from "../../components/TilesBoard/TilesBoard";
import { addToHistory } from '../../redux/actions';

class TilesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      tiles: []
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { selected } = this.props;
    if(prevProps.selected !== selected) {
      this.setState({size: selected}, () => (
        this.setState({tiles: this.createTilesArray(selected)})
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
    const { tiles } = this.state;
    const { addToHistory } = this.props;
    return(
      <section className='tiles-container'>
        <TilesBoard tiles={tiles} addToHistory={addToHistory} />
      </section>
    )
  }
};

const mapStateToProps = state => {
  return {
    selected: state.data.selected,
  }
}

export default connect(mapStateToProps, {
  addToHistory
})(TilesContainer);
