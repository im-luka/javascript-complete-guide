"use strict";

// ⬇️ scoping
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "mike"; // looking for variable first in the current scope
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = "new output";
      console.log(output);
    }
    // console.log(str); // block scoped - can't access
    console.log(millenial); // works - but don't use this approach
    // add(2, 3); // block scope - again
    console.log(output); // mutation of variable
  }

  printAge();

  return age;
}

const firstName = "johnny";
calcAge(1985);
// console.log(age); // can't access
// printAge() // can't access;

// ⬇️ hosting & TDZ (temporal dead zone)
// VARIABLES
// error thrown because of the TDZ
// console.log(me);
// console.log(job);
// console.log(year);

var me = "luka";
let job = "dev";
const year = 1998;

// FUNCTIONS
// declaration works because of hosting
console.log(addDecl(2, 3));
// expression & arrow functions not working because it's just a variable
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
// code will execute, dangerous - never use var
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(x === window.y); // false
console.log(x === window.z); // false
// variables created with 'var' will create window prop (bad bad practice)

// ⬇️ this keyword
console.log(this);

const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge2(1990);

const calcAgeArrow2 = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow2(1995);

const person = {
  birthYear: 1985,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.birthYear);
  },
};
person.calcAge();

const someone = {
  year: 2017,
};
someone.calcAge = person.calcAge;
someone.calcAge();

const f = person.calcAge;
// f(); // error - undefined

// ⬇️ regular functions vs arrow functions
const michael = {
  firstName: "Michael",
  birthYear: 1985,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.birthYear);

    // Solution 1:
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    //   // console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
// michael.greet(); // undefined - 'this' not working with arrow functions
michael.greet();
michael.calcAge();

// arguments keyword
const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr2(2, 3);
addExpr2(2, 3, 5, 8, 12, 19);

var addArrow2 = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow2(2, 5, 8); // error - arguments does not exist in arrow functions

// ⬇️ primitives vs objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const johnny = {
  name: "johnny",
  age: 30,
};

const friend = johnny;
friend.age = 35;

console.log("Friend:", friend);
console.log("Me:", johnny);

// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log(jessica);
console.log(marriedJessica);

// marriedJessica = {}; // not working - can't allocate new memory address

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob", "Sarah"],
};

const jessica2Copy = Object.assign({}, jessica2);
jessica2Copy.lastName = "Davis";
console.log(jessica2);
console.log(jessica2Copy);

jessica2Copy.family.push("Mary", "Seth");
console.log(jessica2);
console.log(jessica2Copy);
