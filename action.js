const rollButton = document.getElementById('roll-dice');
const holdButton = document.getElementById('hold');
const newGameButton = document.getElementById('new-game');
const diceDOM = document.getElementById('dice');

const players = [
    {
        current: document.getElementById('current-0'),
        score: document.getElementById('score-0'),
        panel: document.querySelector('.player-0'),
        sum: 0,
        total: 0
    },
    {
        current: document.getElementById('current-1'),
        score: document.getElementById('score-1'),
        panel: document.querySelector('.player-1'),
        sum: 0,
        total: 0
    }
];

let turn = 0;

const switchTurn = () => {
    turn = !turn;
    players[0].panel.style.backgroundColor = turn ? 'rgba(255, 255, 255, 0.09)' : 'rgba(255, 255, 255, 0.3)';
    players[1].panel.style.backgroundColor = turn ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.09)';
};

const updateScore = () => {
    players[turn].total += players[turn].sum;
    players[turn].score.textContent = `Total Score: ${players[turn].total}`;
    players[turn].current.textContent = 0;
    players[turn].sum = 0;
};

const checkWinner = () => {
    if (players[0].total > players[1].total) {
        return 1;
    } else if (players[1].total > players[0].total) {
        return 2;
    } else {
        return 0;
    }
};

const displayWinner = (winner) => {
    const won = document.createElement('h1');
    if (winner === 0) {
        won.textContent = 'Draw';
    } else {
        won.textContent = `Player ${winner} Won`;
    }
    document.querySelector('.dice').after(won);
    rollButton.style.display = 'none';
    holdButton.style.display = 'none';
};

rollButton.addEventListener('click', () => {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceDOM.src = `images/dice-six-faces-${dice}.png`;

    if (dice === 1) {
        displayWinner(checkWinner());
    } else {
        players[turn].sum += dice;
        players[turn].current.textContent = players[turn].sum;
    }
});

holdButton.addEventListener('click', () => {
    updateScore();
    switchTurn();
});

newGameButton.addEventListener('click', () => {
    players.forEach(player => {
        player.total = 0;
        player.sum = 0;
        player.score.textContent = 'Total Score: 0';
        player.current.textContent = 0;
    });
    turn = 0;
    players[0].panel.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    players[1].panel.style.backgroundColor = 'rgba(255, 255, 255, 0.09)';
    rollButton.style.display = 'inline-block';
    holdButton.style.display = 'inline-block';

    const won = document.querySelector('h1');
    if (won) {
        won.remove();
    }
});