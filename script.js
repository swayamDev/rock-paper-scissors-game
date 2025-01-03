const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    document.querySelector("#player-choice span").textContent = playerChoice;
    document.querySelector("#computer-choice span").textContent =
      computerChoice;
    document.querySelector("#winner span").textContent = winner;
  });
});
