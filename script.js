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

function setStartGames() {
    // skapar nytt objekt med template från klassen Game
    const pokemon = new Game('Pokémon', 'Nintendo', 'switch', 'Malek');
    // lägger även in nya objektet i listan över start-spel
    games.push(pokemon);

    const tlou = new Game('The Last Of Us', 'Naughty Dog', 'PC', 'Joakim');
    games.push(tlou);
    const candyCrush = new Game('Candy Crush', 'King', 'mobile', 'Kicki');
    games.push(candyCrush);
    const rdr = new Game('Red Dead Redemption', 'Rockstar', 'PC', 'Martina');
    games.push(rdr);
};
// sätt spelen i games-list och i local storage för startGames
setStartGames();


ADD_GAME_BTN.addEventListener('click', () => {
    // ta info från användaren
    let title = document.querySelector('#title').value;
    let creator = document.querySelector('#creator').value;
    let device = document.querySelector('#console').value;
    let from = document.querySelector('#from').value;
    // göra till ett nytt objekt med hjälp av klasstypen Game
    let newGame = new Game(title, creator, device, from);
    // läggain det nya objektet i listan games
    games.unshift(newGame);
    // lägga till nya spelet i local storage under games
    localStorage.setItem('games', JSON.stringify(games));
    // rendera uppdaterade listan i UI't
    renderGamesToUI();
});

// körs när sidan renderas
renderGamesToUI();

// rendera spel från games-listan ut till UI't
function renderGamesToUI() {
    // kolla om vi lagt in nya spel (då kommer games i ls vara längre än startGames)
    let allGames = JSON.parse(localStorage.getItem('games'));

    if (allGames) {
        console.log('vi har fler spel tillagda än start-listan');
        // om vi har fler spel under games i ls vill vi rendera dem istället
        games = allGames;
    }
    createGameCards();
};

function createGameCards() {
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
            // sätter valt spel i local storage i browsern
            // så vi kan komma åt den var som helst i applikationen
            localStorage.setItem('game', JSON.stringify(game));
            console.log(game.title);
            console.log(window);
            window.location.href = 'game.html';
        });
        gamesContainerEl.appendChild(gameCardEl);
    });
};