'use strict';

//player 1
const score0 = document.querySelector("#score--0");
const player0 = document.querySelector(".player--0");

//player 2 
const score1 = document.querySelector("#score--1");
const player1 = document.querySelector(".player--1");

//dice
const displayDice = document.querySelector(".dice");

//general
let scores = [0, 0];
let score = 0;
let activePlayer = 0;
//btns
const rollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");

//when player rolls dice
rollDice.addEventListener('click', function () {
    let ranDice = Math.floor(Math.random() * 6) + 1;
    displayDice.src = "./dice/dice-" + ranDice + ".png"

    if (ranDice != 1) {
        //add current score to playerscore 
        score += ranDice;
        //display new score 
        document.querySelector(`#current--${activePlayer}`).textContent = score;

    } else
        switchUser();
})
// If player decides to hold 
btnHold.addEventListener('click', function () {
    scores[activePlayer] += score;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    //if player wins the game 
    if (scores[activePlayer] >= 100) {
        document.querySelector(`#name--${activePlayer}`).textContent = "Winner!";
    }
    switchUser();
})

//function for switching active player 
const switchUser = function () {
    //switchplayer 
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
    score = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = score;
    activePlayer = activePlayer == 0 ? 1 : 0;
}

//if you select new game 
newGame.addEventListener('click', function(){
    scores = [0, 0];
    score0.textContent = 0;
    score1.textContent = 0;
    if(activePlayer == 1){
        player0.classList.toggle("player--active");
        player1.classList.toggle("player--active");
    }
    activePlayer = 0;
})