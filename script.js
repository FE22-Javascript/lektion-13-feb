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

console.log(games);

ADD_GAME_BTN.addEventListener('click', () => {
    console.log('spel');
    // ta info från användaren
    // göra till ett nytt objekt med hjälp av klasstypen Game
    // läggain det nya objektet i listan games
    // rendera uppdaterade listan i UI't
});

renderGamesToUI();
// rendera spel från games-listan ut till UI't
function renderGamesToUI() {
    let gamesContainerEl = document.querySelector('.games-container');
    games.forEach(game => {
        console.log(game);
        gamesContainerEl.innerHTML += `
            <article class="games-container__card">
                <figure></figure>
                <section class="card__info">
                    <h3 class="card__info-title">${game.title}</h3>
                    <p class="card__info-creator">${game.creator}</p>
                    <p class="card__info-console">${game.console}</p>
                    <p class="card__info-from">${game.from}</p>
                </section>
            </article>
        `;
    });
};