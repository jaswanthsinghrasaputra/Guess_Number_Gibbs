// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = "😁 Correct Answer!"

// document.querySelector('.number').textContent = "14";

// document.querySelector('.score').textContent = "10";

// document.querySelector('.guess').value = "34"

// console.log(document.querySelector('.guess').value)

let scerteNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector(".number").textContent = scerteNumber;
let initalScore = 20;
let HighScore = 0;

function DisplayMessage(messageParameter) {
  document.querySelector(".message").textContent = messageParameter;
}

function DisplayScore(scoreParameter) {
  document.querySelector(".score").textContent = scoreParameter;
}

function InputValueHandler() {
  //   console.log(document.querySelector(".guess").value);
  let guessedNumber = Number(document.querySelector(".guess").value);
  //   console.log(typeof(guessedNumber))
  console.log(guessedNumber, typeof guessedNumber);

  if (!guessedNumber) {
    DisplayMessage("🛑 No Number!");
  } else if (guessedNumber === scerteNumber) {
    DisplayMessage("🙂 Correct Number!");
    document.querySelector(".number").textContent = scerteNumber;
    document.querySelector("body").style.backgroundColor = "#056314";
    document.querySelector(".number").style.width = "20rem";
    document.querySelector(".number").style.borderRadius = "20%";
    document.querySelector(".number").style.color = "#84413b";
    if (initalScore > HighScore) {
      HighScore = initalScore;
      document.querySelector(".highscore").textContent = HighScore;
    }
  } else if (guessedNumber !== scerteNumber) {
    if (initalScore > 1) {
      DisplayMessage(
        guessedNumber > scerteNumber ? "📈 Too High!" : "📈 Too Low!"
      );
      initalScore = initalScore - 1;
      DisplayScore(initalScore);
    } else {
      DisplayMessage("😢 You lost the Game");
      DisplayScore(0);
    }
  }
  // else if (guessedNumber > scerteNumber) {
  //   if(initalScore > 1){
  //       document.querySelector(".message").textContent = "📈 Too High!";
  //       initalScore = initalScore - 1;
  //       document.querySelector('.score').textContent = initalScore;
  //   }else {
  //       document.querySelector('.message').textContent = "😢 You lost the Game";
  //       document.querySelector('.score').textContent = "0";
  //   }

  // } else if (guessedNumber < scerteNumber) {
  //   if(initalScore > 1){
  //       document.querySelector(".message").textContent = "📈 Too Low!";
  //       initalScore = initalScore - 1;
  //       document.querySelector('.score').textContent = initalScore;
  //   }else {
  //       document.querySelector('.message').textContent = "😢 You lost the Game";
  //       document.querySelector('.score').textContent = "0";
  //   }
  // }
}

function PlayAgainHandler() {
  initalScore = 20;
  scerteNumber = Math.trunc(Math.random() * 20 + 1);
  DisplayMessage("⭐ Start guessing...");
  DisplayScore(initalScore);
  // document.querySelector('.number').textContent = '?';
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#2d2d2d";
  document.querySelector(".number").style.width = "15rem";
  // document.querySelector('.number').textContent = scerteNumber;
  document.querySelector(".number").textContent = "?";
}

document.querySelector(".check").addEventListener("click", InputValueHandler);

document.querySelector(".again").addEventListener("click", PlayAgainHandler);
