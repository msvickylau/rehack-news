class SavesApi {

  static getAllSaves() {
    return fetch(`/api/v1/saves`)
    .then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default SavesApi;
