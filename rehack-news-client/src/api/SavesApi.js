class SavesApi {

  static fetchAllSaves() {
    return fetch(`http://localhost:3001/api/v1/saves`)
    .then((response) => response.json())
    .catch((error) => error)
  }

  static createSave(save) {
    const request = new Request(`http://localhost:3001/api/v1/saves`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(save)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch((error) => {
      return error;
    });
  }

  static deleteSave(save) {
    const request = new  Request(`http://localhost:3001/api/v1/saves/${save.id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch((error) => {
      return error;
    });
  };

}
export default SavesApi;
