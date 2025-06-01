
const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_xyg7evF5gnrQrWbnZhPKIS8fje2OYnmRBIbPSzIVtHsTaWc0XkHKjwnzj1HL9c5Y"
});

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

let catSection1 = document.getElementById("cat-breed-1");

/*fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))*/

async function fetchCat1() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1', requestOptions);

        if (!response.ok) {
            throw new Error('Request failed');
        }


        const data = await response.json();

        console.log(data);
        let breedName = data[0].breeds[0].name;
        let catImage1 = document.createElement("img");
        catImage1.classList.add("catpic");
        catImage1.src = data[0].url;
        console.log(breedName)
        catImage1.alt = breedName;
        let name = document.createElement("h2");
        name.innerHTML= breedName;
        catSection1.appendChild(catImage1);
        catSection1.appendChild(name);


    } catch (error) {
        console.error('An error occurred:', error);
        let errorMessage = document.createElement("p");
        errorMessage.innerHTML = "An error occurred: " + error;
        catSection1.appendChild(errorMessage);
    }
}
fetchCat1();
