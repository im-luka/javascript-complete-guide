// ⬇️ Activating Strict Mode
"use strict";

// great practice is to use 'use strict' mode always - errors are easier to find and debug

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; // we will get error in console with 'use strict' rule
if (hasDriversLicense) console.log("I can drive 🚘");

// const interface = "Audio"; // error again - 'use strict' mode is great

// ⬇️ Functions
function logger() {
  console.log("my name is luka");
}

// calling / running / invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 2);
console.log(appleJuice);
console.log(fruitProcessor(10, 9));

// DRY - dont repeat yourself - functions purpose

// ⬇️ Function Declarations vs Expressions
// parameter - what function expects
// argument - value given to a function

// Function Declarations
console.log(calcAge1(2008));
// -> works because of hosting
// -> declared functions can be called before declaration (not possible with function expressions)

function calcAge1(birthYear /* parameter */) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991 /* argument */);
console.log(age1);

// Function Expressions
// function is a value
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

// ⬇️ Arrow Functions
// (parameter) => return value
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1998, "john"));
console.log(yearsUntilRetirement(1989, "bob"));
