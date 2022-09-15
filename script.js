let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.getElementById("result")
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function resultWindow(resultText) {
  let text = resultText + "The score is " + userScore + " : " + computerScore + "\nPlay again?";
  if (confirm(text) == true) {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.innerHTML = `YOU ${userScore}`;
    computerScoreSpan.innerHTML = `${computerScore} COMPUTER`;
    resultDiv.innerHTML = `Choose rock, paper or scissors`;
  } else {
    close();
  }
}

function win() {
  userScore++;
  userScoreSpan.innerHTML = `YOU ${userScore}`;
  computerScoreSpan.innerHTML = `${computerScore} COMPUTER`;
  resultDiv.innerHTML = "You win!";
  if (userScore === 2) {
    resultWindow("You won the game! ");
  }
}

function lose() {
  computerScore++;
  userScoreSpan.innerHTML = `YOU ${userScore}`;
  computerScoreSpan.innerHTML = `${computerScore} COMPUTER`;
  resultDiv.innerHTML = "You lose!";
  if (computerScore === 2) {
    resultWindow("You lost the game! ");
  }
}

function draw() {
  resultDiv.innerHTML = "It's a draw!";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win();
      break;
    case "sr":
    case "rp":
    case "ps":
      lose();
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}

function main() {
  rockDiv.addEventListener('click', function() {
  game("r");
  })

  paperDiv.addEventListener('click', function() {
  game("p")
  })

  scissorsDiv.addEventListener('click', function() {
  game("s");
  })
}
main();