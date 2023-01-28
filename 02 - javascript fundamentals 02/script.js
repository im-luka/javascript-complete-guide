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

// ⬇️ Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessorMachine(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
}

console.log(fruitProcessorMachine(2, 3));

// ⬇️ Reviewing Functions
const calcAge = (birthYear) => 2037 - birthYear;

const yearsUntilRetiring = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} will retire in ${retirement} years`;
    console.log("never going to happen");
  } else {
    return -1;
  }
  console.log("never ever going to happen");
};

console.log(yearsUntilRetiring(1994, "mike"));
console.log(yearsUntilRetiring(1950, "seth"));

// ⬇️ Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1994, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // friends.at(-1) -> advanced

friends[2] = "Jay";
console.log(friends);

// we can mutate arrays -> arrays are not primitive values
// friends = ["Bob", "Alice"]; // we cant do this

const name = "Samuel";
const samuel = [name, "Jackson", 1958, "actor", friends];
console.log(samuel);
console.log(samuel.length);

// Exercise
const calcAge4 = (birthYear) => 2037 - birthYear;
const newYears = [1990, 1967, 2002, 2010, 2018];
const newAges = [
  calcAge4(newYears[0]),
  calcAge4(newYears[1]),
  calcAge4(newYears[newYears.length - 1]),
];
console.log(newAges);

// ⬇️ Basic Array Methods
const mates = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = mates.push("Jay"); // add at the end
console.log(mates);
console.log(newLength);

mates.unshift("John"); // at at the beginning
console.log(mates);

// Remove elements
mates.pop(); // remove at the end
const removedElement = mates.pop();
console.log(mates);
console.log(removedElement);

mates.shift(); // remove at the beginning
console.log(mates);

console.log(mates.indexOf("Steven")); // returns index of element -> 1

console.log(mates.includes("Steven")); // returns true if element is in array -> modern version of indexOf -> ES6 (preferred to use)
console.log(mates.includes("Vito"));

if (mates.includes("Peter")) {
  console.log("You have a friend called Peter");
}

// ⬇️ Introduction to Objects
const goat = {
  firstName: "Michael",
  lastName: "Jordan",
  age: "29",
  job: "Athlete",
  friends: ["Steve", "Toni", "Dennis"],
};
