import React from 'react';

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
