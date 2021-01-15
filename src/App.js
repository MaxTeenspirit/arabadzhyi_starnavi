import React from 'react';
import './App.scss';
import { useSelector } from "react-redux";
import SelectContainer from './containers/SelectContainer/SelectContainer';

function App() {
  const isValue = useSelector(state => state.data.selected);

  return (
    <div className="App">
      <SelectContainer />
    </div>
  );
}

export default App;
