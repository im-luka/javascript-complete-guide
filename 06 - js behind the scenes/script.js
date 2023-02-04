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
f(); // error - undefined
