console.log("script.js loaded");
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=vLSqUN5pBTeITSKK0AgohJgEofbxQTXW&q=${searchTerm}&limit=12`;
async function fetchGifs(searchTerm) {
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

    const images = await fetchGifs(searchTer,);
    const searchTerm = input.value;

    images.forEach(url => {
        gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    });
});