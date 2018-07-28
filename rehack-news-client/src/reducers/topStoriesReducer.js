import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function topStoriesReducer(state = initialState.topStories, action) {
  switch(action.type) {

    case types.LOAD_TOP_STORIES_SUCCESS:
      return action.topStories

    default:
      return state;
  }
}
