import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function saveReducer(state = initialState.saves, action) {
  switch(action.type) {
    case types.LOAD_SAVES_SUCCESS:
      return action.saves //to return a new state.
    default:
      return state;
  }
}
