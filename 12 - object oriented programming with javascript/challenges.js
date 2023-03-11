// CODING CHALLENGE #1

const Car = function (mark, speed) {
  this.mark = mark;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.mark} accelerating ⚡️ new speed is ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.mark} braking 🛑 new speed is ${this.speed}`);
};

const car1 = new Car("bmw", 120);
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();

const car2 = new Car("Mercedes", 90);
car2.brake();
car2.brake();
car2.accelerate();
car2.brake();

// CODING CHALLENGE #2

class CarCl {
  constructor(mark, speed) {
    this.mark = mark;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.mark} accelerating ⚡️ new speed is ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.mark} braking 🛑 new speed is ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(input) {
    this.speed = input * 1.6;
  }
}

const car3 = new CarCl("ford", 70);
car3.brake();
car3.accelerate();
car3.accelerate();
car3.brake();
console.log(car3.speedUS);
car3.speedUS = 200;
console.log(car3);

// CODING CHALLENGE #3

const EV = function (mark, speed, charge) {
  Car.call(this, mark, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`Battery charged to ${this.charge}`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge *= 0.9;
  console.log(
    `${this.mark} going at ${this.speed} km/h with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 100, 50);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
