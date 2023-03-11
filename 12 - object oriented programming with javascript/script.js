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

// ⬇️ Inheritance Between "Classes": Constructor Functions

const Human = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Human.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Human.call(this, firstName, birthYear);
  this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Human.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Human);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

// ⬇️ Inheritance Between Classes: ES6 Classes

class HumanCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  // Static methods
  static hey() {
    console.log("Hey there 👋🏼");
  }
}

class StudentCl extends HumanCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`Im ${2037 - this.birthYear} years old but i feel older`);
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
console.log(martha);
martha.introduce();
martha.calcAge();

// ⬇️ Inheritance Between Classes: Object.create()

const PersonPrototype = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steve = Object.create(PersonPrototype);

const StudentPrototype = Object.create(PersonPrototype);

StudentPrototype.init = function (firstName, birthYear, course) {
  PersonPrototype.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentPrototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentPrototype);
jay.init("Jay", 2010, "Computer Science");
console.log(jay);
jay.introduce();

// ⬇️ Another Class Example
// ⬇️ Encapsulation: Protected Properties and Methods
// ⬇️ Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  // public interface
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
      return this;
    }
  }

  static helper() {
    console.log("Helper fnc");
  }

  // 4) Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Mike", "EUR", 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
// console.log(acc1.pin);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

Account.helper();

// ⬇️ Chaining Methods

// return this; in method to make it chainable
acc1.deposit(300).deposit(400).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
