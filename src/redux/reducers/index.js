import {
  ADD_TO_HISTORY,
  CLEAR_HISTORY,
  ADD_TABLE_SIZES,
  ERROR_TABLE_SIZES,
  ADD_SELECTED,
  TOGGLE_START
} from '../constants';

const initialHistoryState = {
  history: [],
  start: false
};

const initialDataReducer = {
  data: {},
  selected: null,
  fetchError: false
};

export function historyReducer(state = initialHistoryState, action) {
  switch (action.type){
    case TOGGLE_START: {
      return {
        ...state,
        start: action.payload
      }
    }
    case ADD_TO_HISTORY: {
      return {
        ...state,
        history: [...state.history, action.payload]
      }
    }
    case CLEAR_HISTORY: {
      return {
        ...state,
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
