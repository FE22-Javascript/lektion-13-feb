const API_URL = 'https://majazocom.github.io/Data/favegames.json';

// dra ner vad vi sparat under 'game' i local storage
// och parsear det från JSON-sträng till JS objekt
const game = JSON.parse(localStorage.getItem('game'));
console.log(game);

let titleEl = document.querySelector('.title');
titleEl.innerHTML = game.title;

async function getGameCover() {
    let response = await fetch(API_URL);
    let data = await response.json();
    console.log(data);
    let index = data.findIndex(fetchedGame => fetchedGame.title === game.title);
    if (index >= 0) {
        // vi fick en matchning
        console.log(data[index].url);
        let imgEl = document.querySelector('.img-placeholder');
        imgEl.setAttribute('src', data[index].url);
    }
};

getGameCover();