console.log("script.js loaded");

async function fetchGifs(searchTerm) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=vLSqUN5pBTeITSKK0AgohJgEofbxQTXW&q=${searchTerm}&limit=10`;
    const response = await fetch(endpoint);
    const data = await response.json();

    console.log(data);

    const images = data.data.map(gif => gif.images.original.url);

    console.log(images);

    return images;
}

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
const input = document.querySelector("#search-input");

button.addEventListener("click", async () => {
    gifContainer.innerHTML = ""; 

    const searchTerm = input.value;
    const images = await fetchGifs(searchTerm); 

    images.forEach(url => {
        gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    });
});