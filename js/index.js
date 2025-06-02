
const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_xyg7evF5gnrQrWbnZhPKIS8fje2OYnmRBIbPSzIVtHsTaWc0XkHKjwnzj1HL9c5Y"
});

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

let catImg = document.getElementById("image");
let catInfo = document.getElementById("info");
let breedId;



async function fetchBreed() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1', requestOptions);

        if (!response.ok) {
            throw new Error('Breed Request failed');
        }


        const data = await response.json();

        console.log(data);
        breedId = data[0].breeds[0].id;
        console.log(breedId);
        let breedName = data[0].breeds[0].name;
        console.log(breedName)
        let name = document.createElement("h2");
        name.innerHTML = breedName;
        let info = document.createElement("p");
        info.innerHTML = data[0].breeds[0].description;


        if (catInfo.firstChild) {
            catInfo.innerHTML = "";
        }

        catInfo.appendChild(name);
        catInfo.appendChild(info);


        //updates image for new breed
        if (catImg.firstChild) {
            catImg.innerHTML = "";
        }

        let image = document.createElement("img");
        image.classList.add("catpic");
        image.src = data[0].url;
        image.alt = breedName;
        catImg.appendChild(image);




    } catch (error) {
        console.error('An error occurred:', error);
        let errorMessage = document.createElement("p");
        errorMessage.innerHTML = "An error occurred: " + error;
        catInfo.appendChild(errorMessage);
    }
}

async function fetchImg() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedId, requestOptions);

        if (!response.ok) {
            throw new Error('Request failed');
        }

        const data = await response.json();

        let breedName = data[0].breeds[0].name;
        let image = document.createElement("img");
        image.classList.add("catpic");
        image.src = data[0].url;
        image.alt = breedName;


        if (catImg.firstChild) {
            catImg.innerHTML = "";
        }
        catImg.appendChild(image);


    } catch (error) {
        console.error('An error occurred:', error);
        let errorMessage = document.createElement("p");
        errorMessage.innerHTML = "An error occurred: " + error;
        catPicture.appendChild(errorMessage);
    }
}

fetchBreed();

