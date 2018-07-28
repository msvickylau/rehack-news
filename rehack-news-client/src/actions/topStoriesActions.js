import * as types from './actionTypes';
import TopStoriesApi from '../api/TopStoriesApi';

export function loadTopStories() {
  return function(dispatch) {
    return TopStoriesApi.getAllTopStories().then(topStories => {
      dispatch(loadTopStoriesSuccess(topStories));
    }).catch(error => {
      throw(error);
    });
  };
}

// we have access to dispatch as an argument though Thunk. Thunk will absorb the dispatch of the loadTopStories function so that it doesn't end up in reducers. Our reducers will only recieve the normal object actions.
// our loadTopStories function calls on our TopsStoriesApi instance and 'then' dispatches another action, loadTopStoriesSuccess, with an argument of the topStories payload we recieved from the API.


export function loadTopStoriesSuccess(topStories) {
  return {type: types.LOAD_TOP_STORIES_SUCCESS, topStories};
}
