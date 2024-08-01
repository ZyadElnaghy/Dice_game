let Roll = document.getElementById('roll-dice');
let turn = 0;
let hold = document.getElementById('hold');
let sum1 = 0 , sum2 = 0 , total1 = 0 , total2 = 0;
Roll.addEventListener('click', function() {
    console.log('Button Clicked');
    let dice = Math.floor(Math.random() * 6) + 1;
    let diceDOM = document.getElementById('dice');

    diceDOM.src = `images/dice-six-faces-${dice}.png`;
    if(dice === 1){
        let won = document.createElement('h1');

        if(total1 > total2){
            
            won.textContent = `Player ${!turn + 1} Won`;            
        }
        else if(total2 > total1){
            won.textContent = `Player ${!turn + 1} Won`;            
        }
        else{
            won.textContent = 'Draw';
        }
        document.querySelector('.dice').after(won);
        Roll.style.display = 'none';
        hold.style.display = 'none';
    }

    
    if(!turn){
        let current = document.getElementById('current-0');
        sum1 += dice;
        current.textContent = sum1;
    }
    else{
        let current = document.getElementById('current-1');
        sum2 += dice;
        current.textContent = sum2;
    }
});


hold.addEventListener('click', function() {
    if(!turn){
        document.querySelector('.player-1').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        document.querySelector('.player-0').style.backgroundColor = 'rgba(255, 255, 255, 0.09)';
        let score = document.getElementById('score-0');
        total1 += sum1;
        score.textContent = `Total Score: ${total1}`;
        let current = document.getElementById('current-0');
        current.textContent = 0;
        sum1 = 0;
    }
    else{
        document.querySelector('.player-0').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        document.querySelector('.player-1').style.backgroundColor = 'rgba(255, 255, 255, 0.09)';
        let score = document.getElementById('score-1');
        total2 += sum2;
        score.textContent = `Total Score: ${total2}`;
        let current = document.getElementById('current-1');
        current.textContent = 0;
        sum2 = 0;
    }
    turn = !turn;
});

let newGame = document.getElementById('new-game');
newGame.addEventListener('click', function() {
    let score = document.getElementById('score-0');
    score.textContent = 'Total Score: ';
    score.textContent += 0;
    score = document.getElementById('score-1');
    score.textContent = 'Total Score: ';
    score.textContent += 0;
    let current = document.getElementById('current-0');
    current.textContent = 0;
    current = document.getElementById('current-1');
    current.textContent = 0;
    document.querySelector('.player-0').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    document.querySelector('.player-1').style.backgroundColor = 'rgba(255, 255, 255, 0.09)';
    Roll.style.display = 'inline-block';
    hold.style.display = 'inline-block';

    let won = document.querySelector('h1');
    if(won){
        won.remove();
    }
    total1 = 0;
    total2 = 0;
    
    sum1 = 0;
    sum2 = 0;
    turn = 0;
});