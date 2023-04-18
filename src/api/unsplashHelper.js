const client_id = 'mQQZTX91lr-pG2qJwzRK5PMiCxFNNQjhBAgEYeV_DLI';
export function getPhotoList(page = '2') {
  return fetch(
    `https://api.unsplash.com/photos/random?count=${page}&orientation=portrait&client_id=${client_id}`
  )
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
}

export function getPhotoListWithQuery(page = '2', query = '') {
  return fetch(
    `https://api.unsplash.com/photos/random?query=${query}&count=${page}&orientation=portrait&client_id=${client_id}`
  )
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
}
