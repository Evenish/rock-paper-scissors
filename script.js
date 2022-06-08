function computerPlay() { // create function for computer to choose
    const choices = ['rock', 'paper', 'scissors']; // create array of choices
    const computerSelection = choices[Math.floor(Math.random() * choices.length)]; // ask to randomly choose from array
    return computerSelection;
}

function playerPlay() { // create function for player to choose
    let playerSelection = prompt("Choose rock, paper, scissors").toLowerCase(); // ask input from player and make case insensitive
    if (playerSelection === 'rock' || // ensure that player puts in valid choice
        playerSelection === 'paper' ||
        playerSelection === 'scissors') {
        playerSelection = playerSelection; // store valid choice in playerSelection variable
    } else {
        alert(`Fine, then don't play.`);
    }
    return playerSelection;
}

let playerScore = 0; // create global variable to store player's score
let computerScore = 0; // create global variable to store computer's score

function compareSelection() { // create function to compare selection
    let computerSelection = computerPlay(); // call computerPlay() and assign return value to computerSelection
    let playerSelection = playerPlay(); // call playerPlay() and assign return value to playerSelection

    if ((playerSelection === 'rock') || (playerSelection === 'paper') || (playerSelection === 'scissors')) { // make sure player input is valid choice
        switch(true) { // add switch statement to compare selections
            case playerSelection === computerSelection: // check if both selections are the same
                console.log(`It's a tie!`);
            break;
            case playerSelection === 'rock' && computerSelection === 'scissors': // check if player wins against computer
            case playerSelection === 'paper' && computerSelection === 'rock':
            case playerSelection === 'scissors' && computerSelection === 'paper':
                console.log(`You win! ${playerSelection} beats ${computerSelection}`); // output victory message with playerSelection and computerSelection
                playerScore++; // add 1 point to player's score for each player win   
            break;
            case computerSelection === 'scissors' && playerSelection === 'paper':
            case computerSelection === 'rock' && playerSelection === 'scisssors':
            case computerSelection === 'paper' && playerSelection === 'rock':
                console.log(`You lose. ${computerSelection} beats ${playerSelection}`); // output defeat message
                computerScore++; // add 1 point to computer's score for each computer win
            break;
        }
    } else { // if player choice is invalid then automatic computer win
        console.log(`Don't know what you chose. Automatic LOSS!`);
        computerScore++;
    }

    console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`); // output message showing player score and computer score each round
}

function game() { // create function that plays for 5 rounds
    for (let i = 0; i < 5; i++) {
    compareSelection(); // run compareSelection() for 5 rounds
    }
    if (playerScore === computerScore) { // after round 5 compare playerScore and computerScore
        console.log(`If you can't beat em, join em!`);
    } else if (playerScore > computerScore) {
        console.log(`They call you the robot killer!`);
    } else if (playerScore < computerScore) {
        console.log(`Prepare for the AI takeover!`);
    }
}

game();