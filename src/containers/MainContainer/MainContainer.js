import React from 'react';
import './MainContainer.scss';
import SelectContainer from "../SelectContainer/SelectContainer";
import TilesContainer from "../TilesContainer/TilesContainer";
import HistoryContainer from "../HistoryContainer/HistoryContainer";

class MainContainer extends React.Component {
  render() {
    return(
      <section className='main-container'>
        <SelectContainer />
        <TilesContainer />
        <HistoryContainer />
      </section>
    )
  }
}

export default MainContainer;
