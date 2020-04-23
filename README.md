# ROLL THE DICE GAME

JavaScript assignment - The objective is to create a roll the dice game app in HTML, CSS and Javascript.

## GAME RULES

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he/she whishes. Each result  get added to his/her ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

### Start the game here

[Click to start](https://cnwebdev.github.io/rollthedice/)

## Technology Used

HTML, CSS, and Javascript

## New JavaScript Verion

[View New Version](assets/js/dicegameNew.js)

## Earlier JavaScript Code Implementation

[View Code](assets/js/dicegame.js)

### Setup DOM elements & Roll the Dice Function

```javascript

// Set global veriables
let scores = [0, 0];
let activeScore, activePlayer;
activeScore = 0;
activePlayer = 0;

// Seclect DOM Elements
const diceImage = document.querySelector('.dice');
const player1 = document.querySelector('.player-0-panel');
const player2 = document.querySelector('.player-1-panel');
const newGame = document.querySelector('.btn-new');
const rollDice = document.querySelector('.btn-roll');
const hold = document.querySelector('.btn-hold');
let totalScore = document.getElementById('score-' + activePlayer);

// Function - rollTheDice
const rollTheDice = () => {
  if (gamePlaying) {
    // Sellect current user
    let actScore = document.getElementById('current-' + activePlayer);

    // Get the dice random number
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    // Display the correct dice image
    diceImage.style.display = 'block';
    diceImage.src = 'assets/img/dice-' + dice + '.png';

    // Update the active score
    if (dice === 1) {
      switchPlayer();
    } else {
      // Add Score
      activeScore += dice;
      console.log(activeScore);
    }
    actScore.textContent = activeScore;
  }
};

```

### Update Game Scores

```javascript

// Update totalScore
const updateTotalScore = () => {
  if (gamePlaying) {
    let totalScore = document.getElementById('score-' + activePlayer);
    let winner = document.getElementById('name-' + activePlayer);

    // Change the dice display when the dice is 1
    diceImage.style.display = 'none';

    // Add current score to totalScore
    scores[activePlayer] += activeScore;

    // Display the players total score.
    totalScore.textContent = scores[activePlayer];

    // Check total score and select winner
    if (scores[activePlayer] >= 100) {
      // Deplay the Winner Band
      winner.textContent = 'Winner!';
      gamePlaying = false;
    } else {
      // Change player 
      switchPlayer();
    }
    activeScore.textContent = 0;
  }
}

```

### Game Start Screenshot

![Game Start](assets/img/diceGame01.png)

### Game Score

![Game Start](assets/img/diceGame02.png)

### Winner View

![Game Start](assets/img/diceGame03.png)
