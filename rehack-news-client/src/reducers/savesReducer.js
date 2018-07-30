import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function saveReducer(state = initialState.saves, action) {
  switch(action.type) {

    case types.LOAD_SAVES_SUCCESS:
      return action.saves //to return a new state.

    case types.CREATE_SAVE_SUCCESS:
      return [
        ...state.filter(save => save.id !== action.save.id),
        Object.assign({}, action.save)
      ]

    default:
      return state;
  }
}
