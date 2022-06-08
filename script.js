function computerPlay() { 
    const choices = ['rock', 'paper', 'scissors']; 
    const computerSelection = choices[Math.floor(Math.random() * choices.length)]; 
    return computerSelection;
}

function playerPlay() { 
    let playerSelection = prompt("Choose rock, paper, scissors").toLowerCase(); // make input case insensitive
    if (playerSelection === 'rock' || // ensure that player puts in valid choice
            playerSelection === 'paper' ||
            playerSelection === 'scissors') {
        playerSelection = playerSelection; 
    } else {
        alert(`Fine, then don't play.`);
    }
    return playerSelection;
}

let playerScore = 0; // create global variable to store player's score
let computerScore = 0; // create global variable to store computer's score

function compareSelection() { 
    let computerSelection = computerPlay(); // assign return value to local variable computerSelection
    let playerSelection = playerPlay(); // assign return value to local variable playerSelection

    if ((playerSelection === 'rock') ||
        (playerSelection === 'paper') ||
        (playerSelection === 'scissors')) { // make sure player input is valid choice
        switch(true) { 
            case playerSelection === computerSelection: 
                console.log(`It's a tie!`);
            break;
            case playerSelection === 'rock' && computerSelection === 'scissors': 
            case playerSelection === 'paper' && computerSelection === 'rock':
            case playerSelection === 'scissors' && computerSelection === 'paper':
                console.log(`You win! ${playerSelection} beats ${computerSelection}`); 
                playerScore++; // add 1 point to player's score for each player win   
            break;
            case computerSelection === 'scissors' && playerSelection === 'paper':
            case computerSelection === 'rock' && playerSelection === 'scisssors':
            case computerSelection === 'paper' && playerSelection === 'rock':
                console.log(`You lose. ${computerSelection} beats ${playerSelection}`); 
                computerScore++; // add 1 point to computer's score for each computer win
            break;
        }
    } else { // if player choice is invalid then automatic computer win
        console.log(`Don't know what you chose. Automatic LOSS!`);
        computerScore++;
    }

    console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`); 
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