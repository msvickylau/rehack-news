import * as types from '../actions/actionTypes';

export default function savesReducer(state = {
    saves: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  switch(action.type) {

    case types.FETCH_SAVES: {
      return {...state, fetching: true}
    }

    case types.FETCH_SAVES_REJECTED: {
      return {...state, fetching: false, error: action.error}
    }

    case types.FETCH_SAVES_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        saves: action.saves
      } // action.saves //to return a new state.
    }

    case types.ADD_SAVE: {
      return {
        ...state,
        saves: [...state.saves, action.save],
      }
    }

    case types.DELETE_SAVE: {
      return {
        ...state,
        saves: state.saves.filter(save => save.id !== action.save.id),
      }
    }

    default: return state;
  }
}
