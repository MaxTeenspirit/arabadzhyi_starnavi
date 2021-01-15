import {
  ADD_TO_HISTORY,
  CLEAR_HISTORY,
  ADD_TABLE_SIZES,
  ERROR_TABLE_SIZES,
  ADD_SELECTED
} from '../constants';

const initialHistoryState = {
  history: []
};

const initialDataReducer = {
  data: {},
  selected: null,
  fetchError: false
};

export function historyReducer(state = initialHistoryState, action) {
  switch (action.type){
    case ADD_TO_HISTORY: {
      return {
        history: [...state, action.payload]
      }
    }
    case CLEAR_HISTORY: {
      return {
        history: []
      }
    }
    default: return state;
  }
};

export function fetchReducer(state = initialDataReducer, action) {
  switch (action.type){
    case ADD_TABLE_SIZES: {
      return {
        ...state,
        data: action.payload,
        fetchError: false

      }
    }
    case ADD_SELECTED: {
      return {
        ...state,
        selected: action.payload
      }
    }
    case ERROR_TABLE_SIZES: {
      return {
        ...state,
        fetchError: true
      }
    }
    default: return state;
  }
};
