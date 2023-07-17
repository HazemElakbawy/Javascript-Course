const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_INPUT = "ROCK";
const DRAW = "DRAW";
const COMPUTER_WINS = "COMPUTER_WINS";
const PLAYER_WINS = "PLAYER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const playerSelection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "");
  playerSelection.toUpperCase();
  if (
    playerSelection !== ROCK &&
    playerSelection !== PAPER &&
    playerSelection !== SCISSORS
  ) {
    alert(`Invalid choice! , We choose ${DEFAULT_USER_INPUT} for you`);
    return DEFAULT_USER_INPUT;
  }
  return playerSelection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (playerSelect, computerSelect = DEFAULT_USER_INPUT) => {
  if (playerSelect == computerSelect) {
    return DRAW;
  } else if (
    (playerSelect == ROCK && computerSelect == SCISSORS) ||
    (playerSelect == SCISSORS && computerSelect == PAPER) ||
    (playerSelect == PAPER && computerSelect == ROCK)
  ) {
    return PLAYER_WINS;
  } else {
    return COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) return;
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  let resultMessage = `you played ${
    playerChoice || DEFAULT_USER_INPUT
  } and computer played ${computerChoice} , therefore you `;

  if (winner == DRAW) {
    resultMessage += "had a draw.";
  } else if (winner == PLAYER_WINS) {
    resultMessage += "won.";
  } else {
    resultMessage += "lost.";
  }

  alert(resultMessage);
});
