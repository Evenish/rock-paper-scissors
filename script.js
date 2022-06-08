const choices = ['rock', 'paper', 'scissors'];
const computerSelection = choices[Math.floor(Math.random() * choices.length)];
console.log(computerSelection);

let playerSelection = prompt("Choose rock, paper, scissors").toLowerCase();
if (playerSelection === 'rock' ||
    playerSelection === 'paper' ||
    playerSelection === 'scissors') {
        playerSelection = playerSelection;
} else {
    alert("Do you want to play or not?");
}