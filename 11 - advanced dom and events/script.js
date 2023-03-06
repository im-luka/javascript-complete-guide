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
document.documentElement.style.setProperty("--color-primary", "lightgreen");

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
  // alert("addEventListener: Great! You are reading the heading");
};

// h1.onmouseenter = alertH1;

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => {
  h1.removeEventListener("mouseenter", alertH1);
}, 3000);

// ⬇️ Event Propagation: Bubbling and Capturing

// ⬇️ Event Propagation

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  // this.style.backgroundColor = randomColor();
  // console.log("LINK", e.target, e.currentTarget);
  // console.log(e.currentTarget === this);
  // Stop propagation
  // e.stopPropagation(); // -> not good idea in practice
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  // this.style.backgroundColor = randomColor();
  // console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    // this.style.backgroundColor = randomColor();
    // console.log("NAV", e.target, e.currentTarget);
  },
  true
);

// ⬇️ Event Delegation: Implementing Page Navigation

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// }); // -> not optimized way

// 1. add event listener to common parent element
// 2. determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// ⬇️ DOM Traversing

// const h1 = document.querySelector("h1");

// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "unset"; // var(--gradient-secondary)
h1.closest("h1").style.background = "unset"; // var(--gradient-primary)

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = "scale(1)"; // scale(0.5)
  }
});

// ⬇️ Building a Tabbed Component

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) {
    return;
  }

  // Active tab
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  // Activate content area
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// ⬇️ Passing Arguments to Event Handlers

// Menu fade animation
const nav = document.querySelector(".nav");

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// Passing argument into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// mouseenter - does not bubble
// mouseover - bubbles
