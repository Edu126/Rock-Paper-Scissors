
let playerScore = 0;
let computerScore = 0;
let roundNum = 0;



// Naming User and Computer Scores to update
const resultPlayer = document.querySelector('#playerScore');
resultPlayer.textContent = "Player Score: " + playerScore;
const resultComputer = document.querySelector('#computerScore');
resultComputer.textContent ="Computer Score: " + computerScore;


// Selecting the inapp message for the game
const inApp = document.querySelector('#inApp')
const finalResult = document.querySelector('.finalResult');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');



// Selecting the player's choice
let selection = document.querySelector('#buttons');
selectionListen = selection.addEventListener('click', function(e) 
    {roundNum++;console.log(roundNum);
        const playAgainBtn = document.querySelector('.btn');
        playAgainBtn.addEventListener('click', restartGame);
    if (roundNum === 5) {game();openModal();}; 
    if (e.target.id === 'buttons') {return;}
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});



//Generating the random selection for computer
function getComputerChoice () {
    let arr = ['rock' ,'paper' ,'scissor'];
    let randomARR = arr[Math.floor(Math.random() * arr.length)];
    return randomARR
}

/// Play the round and display the result
const result = document.querySelector('#result');
const playerPlayed = document.querySelector('#playerPlayed');
const computerPlayed = document.querySelector('#computerPlayed');



function playRound (playerSelection, computerSelection) {
    function played() {
        playerPlayed.textContent = `You played : ${playerSelection}`;
        computerPlayed.textContent = `Computer played : ${computerSelection}`;}
    
if (playerSelection === computerSelection) {
    result.textContent = "Hey! It's a tie, let's try one more time";played();}

else if (playerSelection === 'rock' && computerSelection === 'scissor') {
    result.textContent = "You Win! Rock beats Scissor"; playerScore++;
    resultPlayer.textContent = "Player Score: " + playerScore;played();}

else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result.textContent ="You Win! Paper beats Rock"; playerScore++;
    resultPlayer.textContent = "Player Score: " + playerScore;played();}

else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    result.textContent ="You Win! Scissor beats Paper"; playerScore++;
    resultPlayer.textContent = "Player Score: " + playerScore;played();}

else {
     result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`; computerScore++;
     resultComputer.textContent ="Computer Score: " + computerScore;played();}
}




function game() {
    if (playerScore > computerScore) {finalResult.textContent = "You Win 😄";} 
    else if (playerScore === computerScore) {finalResult.textContent = "It's a tie 😬";}
    else if  (playerScore < computerScore) {finalResult.textContent = "You Lose 🥺";};
}

function openModal() {
    
    overlay.style.display = "block";
    modal.style.display = "block";
  }


function restartGame() {
    window.location.reload(); 
}


function timeFunction() {
    setTimeout(function(){ return }, 2000);
}


