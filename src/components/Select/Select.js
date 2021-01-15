import React from 'react';
import './Select.scss';

const Select = ({handleChange, options}) => {
  return (
    <form>
      <select onChange={handleChange}>
        {options.length && options.map(
          el => <option key={el.value} value={el.value}>
                  {el.label}
                </option>
          )
        }
      </select>
    </form>
  )
};

export default Select;
