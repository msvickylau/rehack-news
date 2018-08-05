import * as types from '../actions/actionTypes';

export default function topStoriesReducer(state = {
  topStories: [],
  fetching: false,
  fetched:false,
  error: null,
}, action) {

  switch(action.type) {

    case types.FETCH_TOPSTORIES: {
      return {...state, fetching: true}
    }

    case types.FETCH_TOPSTORIES_REJECTED: {
      return {...state, fetching: false, error: action.error}
    }

    case types.FETCH_TOPSTORIES_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        topStories: action.topStories
      }
    }

    case types.DISMISS_TOPSTORY: {
      return {
        ...state,
        topStories: state.topStories.filter(story => story.id !== action.story.id),
      }
    }

    default:
      return state;
  }
}
