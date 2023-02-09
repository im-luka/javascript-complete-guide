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
