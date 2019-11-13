function play(playerChoice) {
  let computerChoice = Math.floor(3 * Math.random()) + 1;
  //confusingTempValue is just a variable that is used to keep the logic of expanded rock-paper-scissors games. It evaluates whether or not one item will beat any other based upon whether the difference between the two is even or odd and whether its positive or negative
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
  document.getElementById("results").innerText = "Draw";
}
function Win() {
  document.getElementById("results").innerText = "You Win!";
}
function Lose() {
  document.getElementById("results").innerText =
    "You Lose. You get nothing. Good day, sir. I SAID GOOD DAY!";
}
function addChoices() {
  document.getElementById("options").innerHTML = "";
  let numElem = document.getElementById("numElem").value;
  if (numElem % 2 && numElem > 2 && numElem < Number.MAX_SAFE_INTEGER) {
    for (let i = 0; i < numElem; i++) {
      document.getElementById(
        "options"
      ).innerHTML += `<div class="col-4 text-center choice" onclick="play(${i +
        1})">
    <h2>${i + 1}</h2>
  </div>`;
    }
  } else if (numElem > Number.MAX_SAFE_INTEGER) {
    alert("Error, that number is too big.");
  } else {
    alert("Error, number has to be greater than 2 and odd");
  }
}
