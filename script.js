
let playerScore = 0
let computerScore = 0

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter your choice',"rock, paper, scissors");
        const computerSelection = getComputerChoice();
        console.log('Player choice is: ' + playerSelection)
        console.log('Computer choice is: ' + computerSelection)
        console.log(playRound(playerSelection.toLowerCase(), computerSelection))
    } if (playerScore > computerScore) {console.log("Final Result : You Win")
    } else (console.log("Final Result : You lose"));
    }

//Generating the random selection for computer
function getComputerChoice () {
    let arr = ['rock' ,'paper' ,'scissors'];
    let randomARR = arr[Math.floor(Math.random() * arr.length)];
    return randomARR
}

function playRound (playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    console.log("Buuu! It's a tie, let's try one more time"); playerScore++}
else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log("You Win! Rock beats Scissors"); playerScore++}
else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log("You Win! Paper beats Rock"); playerScore++}
else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log("You Win! Scissors beats Paper"); playerScore++}
else {
     console.log(`You lose! ${computerSelection} beats ${playerSelection}`); computerScore++}
}


console.log(game())



