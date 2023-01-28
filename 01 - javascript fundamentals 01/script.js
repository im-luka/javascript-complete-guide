// ⬇️ Getting to know JS
let js = "amazing";
if (js === "amazing") console.log("Javascript is FUN!");
console.log(40 + 80 + 23 - 10);

// ⬇️ Values & variables
console.log("Luka");
console.log(23);

// some of the naming conventions
let firstName = "Luka";
let first = "lux";
let firstNamePerson;
let first_name;

// letters, numbers, underscores or dollar signs are used for naming
let lux_dule = "lux dule";
let $function = 27;

let person = "John";
let PI = 3.1415;

// don't start with uppercase letter
// keep variable names descriptive
let myFirstJob = "Developer";
let myCurrentJob = "Teacher";

console.log(firstName);
console.log(person);
console.log(myCurrentJob);

// **ASSIGNMENT**
// 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
// 2. Log their values to the console

let [country, continent, population] = ["Croatia", "Europe", 3000000];
console.log(country);
console.log(continent);
console.log(population);

// ⬇️ Data Types
// object or primitive values
// primitive - number, string, boolean, undefined, null, symbol, bigint
let age = 23;
let someName = "Johnny";
let isLearning = true;
let children;
// null - empty value
// symbol - unique and cant be changed
// bigint - larger integers than Number type

console.log(typeof 10);
console.log(typeof "this is a string");
console.log(typeof true);
let willBeUndefined;
console.log(typeof undefined);
console.log(typeof null); // object

// no need to dynamically define the data type
// we can change data types as we want

let whatIsThis = "this is a string for now";
whatIsThis = false;
console.log(whatIsThis); // false

// THIS IS A COMMENT
/* 
  THIS IS A MULTILINE COMMENT
*/

// **ASSIGNMENT**
// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console

let isIsland = false;
let language;
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

// ⬇️ let, const & var
// let - can change later - mutate
// const - constant - never changes
// var - the old let - not in use anymore

let personAge = 30;
personAge = 45;

const birthYear = 2005;
// birthYear = 2008; // not possible
// const variable; // -> error - must initialize

var openJob = "programmer";
openJob = "teacher";

withoutDeclaration = "some random string";
console.log(withoutDeclaration);
// -> possible but never do this

// ⬇️ Basic Operators
// Math operators
const futureYear = 2037;
const ageJohn = futureYear - 1991;
const ageSarah = futureYear - 2018;
console.log(ageJohn, ageSarah);

console.log(ageJohn * 2, ageJohn / 10, 2 ** 3);
// 2 ** 3 -> 2 to the power of 3 = 2 * 2 * 2

const firstString = "John";
const secondString = "Smith";
console.log(firstString + " " + secondString);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // 99
console.log(x);

// Comparison operators : >, <, >=, <=
console.log(ageJohn > ageSarah); // is greater than?
console.log(ageSarah >= 18); // is greater than or equal?

const isFullAge = ageSarah >= 18;

console.log(futureYear - 1991 > futureYear - 2018);

// ⬇️ Operator Precedence
console.log(25 - 10 - 5);

let z, y;
z = y = 25 - 10 - 5; // z = y = 10; assignment -> right-to-left precedence
console.log(z, y);

const averageAge = (ageJohn + ageSarah) / 2;
console.log(ageJohn, ageSarah);
console.log("average age", averageAge);

// ⬇️ Strings & Template Literals
const personName = "Mike";
const personJob = "developer";
const personBirthYear = 1985;
const currYear = 2023;

let someone =
  "I'm " +
  personName +
  ", a " +
  (currYear - personBirthYear) +
  " years old " +
  personJob +
  "!";
console.log(someone);

someone = `I'm ${personName}, a ${
  currYear - personBirthYear
} years old ${personJob}!`;
console.log(someone);

console.log(`Just a regular string with backticks...`);

console.log("String with \nmultiple \nlines");
console.log(`String
multiple
lines`);

// ⬇️ Taking Decisions -> If / Else Statements
const miaAge = 15;

if (miaAge >= 18) {
  console.log("Mia can start driving license 🚗");
} else {
  const yearsLeft = 18 - miaAge;
  console.log(`Mia is too young. Wait another ${yearsLeft} years.`);
}

const birthYear2 = 1991;
let century;
if (birthYear2 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`Century is ${century}`);

// ⬇️ Type Conversion & Coercion
// in console - numbers are purple, strings are white

// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("luka")); // NaN - Not a Number
console.log(typeof NaN); // number - invalid number

console.log(String(1990), 1990);

// type coercion
console.log("I am " + 23 + " years old"); // converts number to string automatically
console.log("23" - "10" - 3); // minus operator triggers opposite conversion
console.log("23" * "2"); // numbers again

// operator plus concats strings

let n = "1" + 1;
n = n - 1; // what will be printed? guess it
console.log(n);

console.log(2 + 3 + 4 + "5"); // 95
console.log("10" - "4" - "3" - 2 + "5"); // 15

// ⬇️ Truthy & Falsy Values

// when converting to boolean
// 5 (+ 1) Falsy values -> false, 0, '', undefined, null, NaN
// Truthy values -> everything else

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("luka"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(undefined));

// -> conversion to boolean is implicit and not explicit by default
// no need to cast to boolean when making a condition

const money = 0;
// no need for if(Boolean(money))
if (money) {
  console.log("I have money 💶");
} else {
  console.log("I'm broke 😞");
}

let height = 0; // Falsy
if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined");
}

// ⬇️ Equality Operators -> == vs ===

// === -> strict equality operator (no type conversion)
// == -> loose equality operator (performs type conversion)

const yourAge = 18;

if (yourAge === 18) console.log("You just become adult! (strict)");

if (yourAge == 18) console.log("You just become adult! (loose)");

// try to use === (strict) ALWAYS!

const favNumber =
  // prompt("What's your favorite number?")
  // ||
  33;
console.log(favNumber, typeof favNumber);

// 33 == "33" -> true
// 33 === "33" -> false
if (favNumber == 33) {
  console.log("Loose operator works now. (number and string)");
}
if (favNumber !== 23) {
  console.log("Why is 23 not a fav number?");
}

// ⬇️ Boolean Logic & Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive 🚌");
} else {
  console.log("Someone else should drive 😅");
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive 🚌");
} else {
  console.log("Someone else should drive 😅");
}
