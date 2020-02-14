///////////////////////////////////////////////////////////////////////////
// Roll The Dice Game
//

let scores = [0, 0];
let activeScore, activePlayer;
activeScore = 0;
activePlayer = 0;

// Seclect players 
const diceImage = document.querySelector('.dice');
const player1 = document.querySelector('.player-0-panel');
const player2 = document.querySelector('.player-1-panel');
const newGame = document.querySelector('.btn-new');
const rollDice = document.querySelector('.btn-roll');
const hold = document.querySelector('.btn-hold');
let totalScore = document.getElementById('score-' + activePlayer);
document.querySelector('.dice').style.display = 'none';


const rollTheDice = () => {
  let actScore = document.getElementById('current-' + activePlayer);

  // Get the dice random number
  const dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);

  // Display the correct dice image
  diceImage.style.display = 'block';
  diceImage.src = 'assets/img/dice-' + dice + '.png';

  // Update the active score
  if (dice !== 1) {
    // Add Score
    activeScore += dice;
    // actScore.textContent = activeScore;
  } else {
    switchPlayer();
  }
  actScore.textContent = activeScore;
}

const switchPlayer = () => {
  // Reset actScore to 0
  activeScore = 0;

  // Next Player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  // Change active player display
  // player1.classList.remove('active');
  // player2.classList.add('active');
  player1.classList.toggle('active');
  player2.classList.toggle('active');

  // Change the dice display when the dice is 1
  // diceImage.style.display = 'none';
}


const updateTotalScore = () => {
  let totalScore = document.getElementById('score-' + activePlayer);
  let winner = document.querySelector('#name-' + activePlayer);

  // Add current score to totalScore
  scores[activePlayer] += activeScore;

  // Display the players total score.
  totalScore.textContent = scores[activePlayer];

  // Check total score and select winner
  if (scores[activePlayer] >= 20) {
    // Deplay the Winner Band
    winner.textContent = 'Winner!';

    // Disable roll dice and hold button
    rollDice.disabled = true;
    hold.disabled = true;
  } else {
    // Change player 
    switchPlayer();
  }
}

// Reset all game score on load or function call
const playAgain = () => {
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';
  player1.classList.remove = 'active';
  player1.classList.add = 'active';
  rollDice.disabled = false;
  hold.disabled = false;
  scores = [0, 0];
  activeScore = 0;
}
playAgain();

rollDice.addEventListener('click', rollTheDice);
hold.addEventListener('click', updateTotalScore);
newGame.addEventListener('click', playAgain);
