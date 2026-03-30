console.log("script.js loaded");
const endpoint = "https://api.giphy.com/v2/emoji?api_key=vLSqUN5pBTeITSKK0AgohJgEofbxQTXW&limit=10&offset=0"
async function fetchGifs() {
    const response = await fetch(endpoint);
    const data = await response.json();

    console.log(data);

    const images = data.data.map(gif => gif.images.original.url);

    console.log(images);

    return images;
}
const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
button.addEventListener("click", async () => {
    gifContainer.innerHTML = ""; 

    const images = await fetchGifs();

    images.forEach(url => {
        gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    });
});