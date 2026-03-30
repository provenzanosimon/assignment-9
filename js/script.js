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