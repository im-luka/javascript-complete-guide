"use strict";

// query selector -> select class or id in the same way
// textContent -> text in element
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉 Correct number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 17;
console.log(document.querySelector(".guess").value);
