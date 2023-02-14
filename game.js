// dra ner vad vi sparat under 'game' i local storage
// och parsear det från JSON-sträng till JS objekt
const game = JSON.parse(localStorage.getItem('game'));
console.log(game);

let titleEl = document.querySelector('.title');
titleEl.innerHTML = game.title;