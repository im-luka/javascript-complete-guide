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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", (event) => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess); // -> you'll get a string from input tag - casting to Number needed

  const message = document.querySelector(".message");
  if (!guess) {
    message.textContent = "❌ No number provided";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct number!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "💣 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "📈 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "💣 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
