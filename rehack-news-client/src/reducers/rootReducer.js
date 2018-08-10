import {combineReducers} from 'redux';
import saves from './savesReducer';
import topStories from './topStoriesReducer';

const rootReducer = combineReducers({
  saves,
  topStories
})

export default rootReducer;
