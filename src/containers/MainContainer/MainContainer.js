import React from 'react';
import './MainContainer.scss';
import SelectContainer from "../SelectContainer/SelectContainer";
import TilesContainer from "../TilesContainer/TilesContainer";

class MainContainer extends React.Component {
  render() {
    return(
      <section className='main-container'>
        <SelectContainer />
        <TilesContainer />
      </section>
    )
  }
}

export default MainContainer;
