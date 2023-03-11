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
