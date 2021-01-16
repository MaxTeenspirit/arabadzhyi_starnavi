import React from 'react';
import Select from '../../components/Select/Select';

class SelectContainer extends React.Component {
  render() {
    const { options, button, handleButton, handleChange } = this.props;
    const buttonTitle = button ? 'START' : 'STOP';
    return (
      <section className='select-wrapper'>
        <Select options={options} handleChange={handleChange} />
        <button onClick={handleButton} className='main-button'>{buttonTitle}</button>
      </section>
    )
  }
};

export default SelectContainer;
