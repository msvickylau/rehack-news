class SavesApi {
  // static getAllSaves(user) {
    // return fetch(`/api/v1/users/${user.id}/saves`)
  static getAllSaves() {
    return fetch(`/api/v1/users/2/saves`)
    .then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default SavesApi;
