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

document.querySelector(".check").addEventListener("click", (event) => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess); // -> you'll get a string from input tag - casting to Number needed

  if (!guess) {
    document.querySelector(".message").textContent = "❌ No number provided";
  }
});
