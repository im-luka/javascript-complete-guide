"use strict";

// ⬇️ Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this - for every person, this method is called - bad optimization
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear)
  // }
};

const luka = new Person("Luka", 1998);
// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
console.log(luka);

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1985);
console.log(matilda, jack);

console.log(luka instanceof Person);
