"use strict";

// ⬇️ Default Parameters

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 2, 5);

// if you want to skip parameter - just write undefined instead of it
createBooking("LH123", undefined, 1000);

// ⬇️ How Passing Arguments Works: Value vs Reference

const flight = "LH234";
const mike = {
  name: "Mike Jordan",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    console.log("Checked in");
  } else {
    console.log("Wrong passport");
  }
};

checkIn(flight, mike);
console.log(flight);
console.log(mike);

// Is the same as doing...
const flightNum = flight;
const passenger = mike;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};
newPassport(mike);
checkIn(flight, mike);

// ⬇️ First-Class and Higher-Order Functions

// ⬇️ Higher-Order Functions
// function that accepts (or returns) another function

// abstraction - hide detail of code implementation because it is not important

const oneWord = function (str) {
  return str.replace(/ /g, " ").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
// abstraction - transforming the string, not important how it's done. only purpose is to transform it. way of transforming could be different. that's why callback function is called (describing the method of transforming)
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋🏼");
};
document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5);

// ⬇️ Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("bok");
greeterHey("luka");
greeterHey("mike");

greet("hey")("5ra");

// Challenge
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow("ayy")("lux");
