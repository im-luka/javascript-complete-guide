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
