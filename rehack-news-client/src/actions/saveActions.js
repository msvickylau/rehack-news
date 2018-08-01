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

export function createSave(data) {
  fetch(`http://localhost:3001/api/v1/saves`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}
