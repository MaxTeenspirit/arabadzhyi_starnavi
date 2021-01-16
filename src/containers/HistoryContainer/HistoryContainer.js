import React from 'react';
import './HistoryContainer.scss';
import { connect } from 'react-redux';
import HistoryItem from '../../components/HistoryItem/HistoryItem';

class HistoryContainer extends React.Component {
  render() {
    if (!this.props.history.length) return <div className='empty-history' />;
    return (
      <section className='history-wrapper'>
        {
          this.props.history.map((el, index) => {
            return <HistoryItem key={index} row={el.row} col={el.col} />
          })
        }
      </section>
    )
  }
};

const mapStateToProps = state => {
  return {
    history: state.history.history
  }
}

export default connect(mapStateToProps)(HistoryContainer);
