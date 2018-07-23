import {combineReducers} from 'redux';
import saves from './savesReducer';

const rootReducer = combineReducers({
  saves: saves
})

export default rootReducer;
