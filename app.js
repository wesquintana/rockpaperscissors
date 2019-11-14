let currentComputerChoice = 0;
let currentPlayerChoice = 0;
let numElem = document.getElementById("numElem");
function play(playerChoice) {
  //used a bitwise operator to truncate. Not very safe most of the time, but since any number large enough to cause errors would also grind most computers to a halt or get caught by the safe number detector, I decided the very small efficiency boost was worth it. Even though its nearly negligible.
  // @ts-ignore
  let computerChoice = ~~(numElem.value * Math.random()) + 1;
  currentComputerChoice = computerChoice;
  currentPlayerChoice = playerChoice;
  //confusingTempValue is just a variable that is used to keep the logic of expanded rock-paper-scissors games. It evaluates whether or not one item will beat any other based upon whether the difference between the two is even or odd and whether it's positive or negative; neccessitates that every option can beat the option that is one higher than itself
  let confusingTempValue = playerChoice - computerChoice;
  if (confusingTempValue === 0) {
    Tie();
  } else if (confusingTempValue > 0) {
    if (!(confusingTempValue % 2)) {
      Win();
    } else {
      Lose();
    }
  } else if (!(confusingTempValue % 2)) {
    Lose();
  } else {
    Win();
  }
}
function Tie() {
  document.getElementById(
    "results"
  ).innerText = `${currentPlayerChoice} is matched by ${currentComputerChoice}. It's a Draw.`;
}
function Win() {
  document.getElementById(
    "results"
  ).innerText = `${currentPlayerChoice} beats ${currentComputerChoice}. You Win!`;
}
function Lose() {
  document.getElementById(
    "results"
  ).innerText = `${currentPlayerChoice} fails against ${currentComputerChoice}. You Lose. You get nothing. Good day, sir. I SAID GOOD DAY!`;
}
function addChoices() {
  document.getElementById("options").innerHTML = "";
  // @ts-ignore
  let numberElem = numElem.value;
  if (
    numberElem % 2 &&
    numberElem > 2 &&
    numberElem < Number.MAX_SAFE_INTEGER
  ) {
    for (let i = 0; i < numberElem; i++) {
      document.getElementById(
        "options"
      ).innerHTML += `<div class="col-4 text-center choice" onclick="play(${i +
        1})">
    <h2>${i + 1}</h2>
  </div>`;
    }
  } else if (numberElem > Number.MAX_SAFE_INTEGER) {
    alert("Error, that number is too big.");
  } else {
    alert("Error, number has to be greater than 2 and odd");
  }
}
