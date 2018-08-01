class SavesApi {

  static fetchAllSaves() {
    return fetch(`http://localhost:3001/api/v1/saves`)
    .then(response => response.json())
    .catch(error => error)
  }

  // static createSave(data) {
  //   return fetch(`http://localhost:3001/api/v1/saves`, {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers:{
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .catch(error => console.error('Error:', error))
  //   .then(response => console.log('Success:', response));
  // }


}
export default SavesApi;
