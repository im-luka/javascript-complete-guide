"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ⬇️ Selecting, Creating and Deleting Elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections); // NodeList

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons); // HTMLCollection -> if element changes, DOM is updated automatically

console.log(document.getElementsByClassName("btn")); // HTMLCollection

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics."
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";

// element can only be added once (prepend or append)
header.prepend(message); // add as first child
header.append(message); // add as last child
// '.closeNode(true)' method must be used to clone the element and append it more than once
// header.append(message.cloneNode(true));

header.before(message); // before the parent
header.after(message); // after the parent

header.append(message);

// Delete elements
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove(); // remove element from DOM
  message.parentElement.removeChild(message); // the old way of removing - outdated
});
