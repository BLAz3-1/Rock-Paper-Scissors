function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random == 0) {
      return 'rock';
    }
    else if (random == 1) {
      return 'paper';
    }
    else {
      return 'scissors';
    }
  }

  function getHumanChoice() {
    return prompt("Pick between rock, paper and scissor");
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    //IF HUMAN PLAYS ROCK 
    if (humanChoice == 'rock' && computerChoice == 'rock') {
      console.log("Rock vs Rock, it's a tie! Score's remain the same");
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper') {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    }

    //IF HUMAN PLAYS PAPER
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
      console.log("You win! Paper beats Rock");
      humanScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'paper') {
      console.log("Paper vs Paper, it's a tie! Score's remain the same");
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissors') {
      console.log("You lose! Scissors beats Paper");
      computerScore++;
    }

    //IF HUMAN PLAYS SCISSORS
    else if (humanChoice == 'scissors' && computerChoice == 'rock') {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
      console.log("Scissors vs Scissors, it's a tie! Score's remain the same");
    }
  }

  console.log("Human Score is: " + humanScore);
  console.log("Computer Score is: " + computerScore);
}

playGame();