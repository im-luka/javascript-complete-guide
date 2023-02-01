"use strict";

// query selector -> select class or id in the same way
// textContent -> text in element

// Learning basics - not important
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉 Correct number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 17;
console.log(document.querySelector(".guess").value);
*/

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", (event) => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess); // -> you'll get a string from input tag - casting to Number needed

  // When there is no guess
  if (!guess) {
    document.querySelector(".message").textContent = "❌ No number provided";

    // When player wins the game
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💣 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💣 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// you could also refresh the page (but highscore would be lost) with 'window.location.reload();'
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
