let choice = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    console.log(choice[(Math.floor(Math.random()*getComputerChoice.length))])
}
getComputerChoice()

function playRound(playerSelection, computerSelection) {
    if (playerSelection === Rock && computerSelection === Scissors)
    return "Rock beats Scissors!";
    if (playerSelection === Rock && computerSelection === Paper)
    return "Paper beats Rock!";
    if (playerSelection === Rock && computerSelection === Rock)
    return "It's a tie!";
    if (playerSelection === Scissors && computerSelection === Rock)
    return "Rock beats Scissors!";
    if (playerSelection === Paper && computerSelection === Rock)
    return "Paper beats Rock!";
  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
