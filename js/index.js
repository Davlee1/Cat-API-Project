
const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_xyg7evF5gnrQrWbnZhPKIS8fje2OYnmRBIbPSzIVtHsTaWc0XkHKjwnzj1HL9c5Y"
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

/*fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))*/

  async function fetchData() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1', requestOptions);
    
    if (!response.ok) {
      throw new Error('Request failed');
    }
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
fetchData();
