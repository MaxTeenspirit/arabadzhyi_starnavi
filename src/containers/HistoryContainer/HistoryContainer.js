import React from 'react';
import { connect } from 'react-redux';
import HistoryItem from '../../components/HistoryItem/HistoryItem';

class HistoryContainer extends React.Component {
  render() {
    if (!this.props.history.length) return null;
    return (
      <section className='history-wrapper'>
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
