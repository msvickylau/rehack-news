import * as types from './actionTypes';
import SavesApi from '../api/SavesApi';

export function fetchSaves() {
  return function(dispatch) {
    dispatch({type: types.FETCH_SAVES});

    return SavesApi.fetchAllSaves().then(saves => {
      dispatch({type: types.FETCH_SAVES_FULFILLED, saves});
    })
    .catch((error) => {
      dispatch({type: types.FETCH_SAVES_REJECTED, error})
    })
  }
}

export function addSave(save) {
  return {type: types.ADD_SAVE, save}
}
export function createSave(save) {
  return function (dispatch) {
    return SavesApi.createSave(save).then(responseSave => {
      // console.log("hello there" + responseSave)
      dispatch(addSave(responseSave));
      return responseSave;
    }).catch(error => {
      throw(error);
    });
  };
}
