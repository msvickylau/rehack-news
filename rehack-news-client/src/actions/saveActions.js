import * as types from './actionTypes';
import SavesApi from '../api/SavesApi';

export function loadSaves() {
  return function(dispatch) {
    return SavesApi.getAllSaves().then(saves => {
      dispatch(loadSavesSucess(saves));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadSavesSucess(saves) {
  return {type: types.LOAD_SAVES_SUCCESS, saves};
}
