"use strict";

// ⬇️ Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this - for every person, this method is called - bad optimization
  // modify prototype - better way
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

// ⬇️ Prototypes

console.log(Person.prototype);

// better way od adding methods to constructor function object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

luka.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(luka.__proto__);
console.log(luka.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(luka));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
// .prototypeOfLinkedObjects - perhaps better naming

Person.prototype.species = "Homo Sapiens";
console.log(luka.species, matilda.species);

console.log(luka.hasOwnProperty("firstName"));
console.log(luka.hasOwnProperty("species"));

// ⬇️ Prototype Inheritance on Built-In Objects

console.log(luka.__proto__);
// Object.prototype (top of prototype chain)
console.log(luka.__proto__.__proto__);
console.log(luka.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 5, 7, 8, 11, 6, 4, 22, 1, 3, 7, 11]; // new Array = []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// extending built-in object is not a good idea
console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(h1);
console.dir((x) => x + 1);

// ⬇️ ES6 Classes

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// also working as always
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// 1. classes are NOT hoisted
// 2. classes are first-class citizens
// 3. classes are executed in strict mode

// ⬇️ Setters and Getters

const account = {
  owner: "luka",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// read method as property by using get
console.log(account.latest);

// call method as property by using set
account.latest = 50;
console.log(account.movements);

// ⬇️ Static Methods

// available on classes and not on instances

console.log(Array.from(document.querySelectorAll("h1")));
console.log(Number.parseFloat(12));

// static methods on constructor functions
const House = function (location, color) {
  this.location = location;
  this.color = color;
};

const house1 = new House("Zagreb", "white");

House.size = function () {
  console.log("Big house 🏠");
  console.log(this);
};

House.size();

// static method on es6 classes
class HouseCl {
  constructor(location, color) {
    this.location = location;
    this.color = color;
  }

  static size() {
    console.log("Big house 🏠");
    console.log(this);
  }
}

const house2 = new HouseCl("Rijeka", "gray");

HouseCl.size();

// ⬇️ Object.create()

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 1993;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();
