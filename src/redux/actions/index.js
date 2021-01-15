import axios from 'axios';
import {
  ADD_TABLE_SIZES,
  ERROR_TABLE_SIZES,
  ADD_TO_HISTORY,
  CLEAR_HISTORY,
  ADD_SELECTED
} from '../constants';

export function fetchTableSize() {
  return function (dispatch) {
    axios.get("http://demo1030918.mockable.io").then(({data}) => {dispatch(addTableSizes(data))}).catch(() => {dispatch(errorTableSizes())})
  }
};

function addTableSizes(sizes) {
  return {
    type: ADD_TABLE_SIZES,
    payload: sizes
  }
};

export function errorTableSizes() {
  return {
    type: ERROR_TABLE_SIZES
  }
};

export function addSelected(selected) {
  return {
    type: ADD_SELECTED,
    payload: selected
  }
}

export function addToHistory(data) {
  return {
    type: ADD_TO_HISTORY,
    payload: {
      row: data.row,
      col: data.col
    }
  }
};

export function clearHistory() {
  return {
    type: CLEAR_HISTORY
  }
};
