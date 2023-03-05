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

// ⬇️ Styles, Attributes and Classes

// Styles
// inline styles in DOM
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.height); // can't read styles like this
console.log(message.style.backgroundColor); // can only read inline styles

console.log(getComputedStyle(message)); // all of the css styles
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

// :root is equivalent to document.documentElement
document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";
console.log(logo.alt);

// Non-standard
console.log(logo.designer); // can't read attributes that are not html standard
console.log(logo.getAttribute("designer")); // works!
logo.setAttribute("company", "Recode X");
console.log(logo.getAttribute("company")); // works!

// src
console.log(logo.src); // absolute
console.log(logo.getAttribute("src")); // relative

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "l", "a");
logo.classList.remove("c", "l");
logo.classList.toggle("c");
logo.classList.contains("c");

// don't use - overrides existing classes. dangerous!!
// logo.className = "new";

// ⬇️ Implementing Smooth Scrolling

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (event) => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(event.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.scrollX, window.scrollY);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );
  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: "smooth",
  }); // older way

  section1.scrollIntoView({ behavior: "smooth" }); // modern and easier way
});

// ⬇️ Types of Events and Event Handlers

const h1 = document.querySelector("h1");

const alertH1 = (e) => {
  alert("addEventListener: Great! You are reading the heading");
};

// h1.onmouseenter = alertH1;

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => {
  h1.removeEventListener("mouseenter", alertH1);
}, 3000);
