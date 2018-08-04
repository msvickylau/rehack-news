import * as types from './actionTypes';
import TopStoriesApi from '../api/TopStoriesApi';

export function fetchTopStories() {
  return function(dispatch) {
    dispatch({type: types.FETCH_TOPSTORIES});

    return TopStoriesApi.fetchAllTopStories().then(topStories => {
      console.log("in topStoriesActions printing topStories:")
      console.log(topStories)
      dispatch({type: types.FETCH_TOPSTORIES_FULFILLED, topStories});

    }).catch(error => {
      dispatch({type: types.FETCH_TOPSTORIES_REJECTED, error})
    })
  };
}

export function dismissStory(story) {
  return {type: types.DISMISS_TOPSTORY, story}
}

// we have access to dispatch as an argument though Thunk. Thunk will absorb the dispatch of the loadTopStories function so that it doesn't end up in reducers. Our reducers will only recieve the normal object actions.
// our fetchTopStories function calls on our TopsStoriesApi instance and 'then' dispatches another action, FETCH_TOPSTORIES_FULFILLED, with an argument of the topStories payload we recieved from the API.
