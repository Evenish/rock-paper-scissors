const choices = ['rock', 'paper', 'scissors']; // create array of choices
const computerSelection = choices[Math.floor(Math.random() * choices.length)]; // ask to randomly choose from array
console.log(computerSelection); // output selection to console to check

let playerSelection = prompt("Choose rock, paper, scissors").toLowerCase(); // ask input from player and make case insensitive
if (playerSelection === 'rock' || // ensure that player puts in valid choice
    playerSelection === 'paper' ||
    playerSelection === 'scissors') {
        playerSelection = playerSelection; // store valid choice in playerSelection variable
} else {
    alert("Fine, then don't play."); // reject player input
}
console.log(playerSelection); // output selection to console to check

if (playerSelection === computerSelection) { // check if both selections are the same
    console.log(`It's a tie!`); // announce tie
} else if ((playerSelection === 'rock' && computerSelection === 'scissors') || // check if player wins against computer
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`); // output victory message with playerSelection and computerSelection
} else { // otherwise player loses
    console.log(`You lose. ${computerSelection} beats ${playerSelection}`); // output defeat message
}
