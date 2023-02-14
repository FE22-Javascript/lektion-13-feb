let games = [];
const ADD_GAME_BTN = document.querySelector('#add-game');

// class declaration
class Game {
    constructor(title, creator, console, from) {
        this.title = title;
        this.creator = creator;
        this.console = console;
        this.from = from;
    }
};

const pokemon = new Game('Pokémon', 'Nintendo', 'switch', 'Malek');
games.push(pokemon);
const tlou = new Game('The Last Of Us', 'Naughty Dog', 'PC', 'Joakim');
games.push(tlou);
const candyCrush = new Game('Candy Crush', 'King', 'mobile', 'Kicki');
games.push(candyCrush);
const rdr = new Game('Red Dead Redemption', 'Rockstar', 'PC', 'Martina');
games.push(rdr);

ADD_GAME_BTN.addEventListener('click', () => {
    console.log('spel');
    // ta info från användaren
    let title = document.querySelector('#title').value;
    let creator = document.querySelector('#creator').value;
    let device = document.querySelector('#console').value;
    let from = document.querySelector('#from').value;
    // göra till ett nytt objekt med hjälp av klasstypen Game
    let newGame = new Game(title, creator, device, from);
    // läggain det nya objektet i listan games
    games.unshift(newGame);
    // rendera uppdaterade listan i UI't
    renderGamesToUI();
});

renderGamesToUI();
// rendera spel från games-listan ut till UI't
function renderGamesToUI() {
    let gamesContainerEl = document.querySelector('.games-container');
    gamesContainerEl.innerHTML = '';
    games.forEach(game => {
        let gameCardEl = document.createElement('article');
        gameCardEl.classList.add('games-container__card');
        gameCardEl.innerHTML = `
                <figure></figure>
                <section class="card__info">
                    <h3 class="card__info-title">${game.title}</h3>
                    <p class="card__info-creator">${game.creator}</p>
                    <p class="card__info-console">${game.console}</p>
                    <p class="card__info-from">${game.from}</p>
                </section>
        `;
        gameCardEl.addEventListener('click', () => {
            localStorage.setItem('game', )
            console.log(game.title);
            console.log(window);
            window.location.href = 'game.html';
        });
        gamesContainerEl.appendChild(gameCardEl);
    });

};