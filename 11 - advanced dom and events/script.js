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

// ⬇️ Implementing a Sticky Nav - The Scroll Event

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener("scroll", function (e) {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

// ⬇️ The Intersection Observer API

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    // console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

// Sticky nav in app
// const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// ⬇️ Revealing Elements on Scroll

// const allSections = document.querySelectorAll(".section")

const revealSections = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    return;
  }

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  // TODO: ⬇️ uncomment
  // section.classList.add("section--hidden");
});

// ⬇️ Lazy Loading Images

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    return;
  }

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// ⬇️ Building a Slider Component - Part 01

const implementSlider = () => {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let currSlide = 0;
  const maxSlide = slides.length;

  // 0%, 100%, 200%, 300%

  const goToSlide = (slide) => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = () => {
    if (currSlide === maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }

    goToSlide(currSlide);
    activateDot(currSlide);
  };

  // Previous slide
  const prevSlide = () => {
    if (currSlide === 0) {
      currSlide = maxSlide - 1;
    } else {
      currSlide--;
    }

    goToSlide(currSlide);
    activateDot(currSlide);
  };

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  // ⬇️ Building a Slider Component - Part 02

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    }
    e.key === "ArrowRight" && nextSlide();
  });

  const dotContainer = document.querySelector(".dots");

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = (slide) => {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const init = () => {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
implementSlider();

// ⬇️ Lifecycle DOM Events

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("HTML parsed and DOM tree built!");
});

window.addEventListener("load", (e) => {
  console.log("Page fully loaded", e);
});

// beforeunload - pop up window when user tries to leave the page (or refresh the page) - don't overuse
// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = "";
// });

// ⬇️ Efficient Script Loading - defer and async

// AT THE END OF THE BODY
// ➡️ great solution
// ➡️ scripting is waiting for the html content to load and is then executed
// ➡️ old browser does not support async and defer - use this method instead

// IN THE HEAD

// ASYNC
// ➡️ script is fetching asynchronously with html, then when the script is loaded, parsing of html is waiting for a script to be run (scripts are executed immediately when they are fetched)
// ➡️ DOMContentLoaded waits for all scripts to be loaded, except for async scripts
// ➡️ scripts are not guaranteed to execute in order

// DEFER
// ➡️ scripts are fetched asynchronously and are executed after the html is completely parsed (when fetched, scripts are still waiting for html to be loaded)
// ➡️ DOMContentLoaded event fires after defer script is executed
// ➡️ scripts are executed in order
