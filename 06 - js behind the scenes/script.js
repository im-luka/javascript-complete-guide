"use strict";

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
