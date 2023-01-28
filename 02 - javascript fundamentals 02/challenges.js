// CODING CHALLENGE #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (!(avgDolphins > avgKoalas * 2 || avgKoalas > avgDolphins * 2)) {
    return `There is no winner ❌`;
  }

  return avgDolphins > avgKoalas ? "Dolphins win 🐬" : "Koalas win 🐨";
};

const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);
console.log("dolphins average", dolphinsAverage);
console.log("koalas average", koalasAverage);

console.log(checkWinner(dolphinsAverage, koalasAverage));

// CODING CHALLENGE #2

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const calcTotal = (bill, tip) => bill + tip;

const bills = [125, 777, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
const totals = [
  calcTotal(bills[0], tips[0]),
  calcTotal(bills[1], tips[1]),
  calcTotal(bills[2], tips[2]),
];
console.log(bills, tips, totals);

// CODING CHALLENGE #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} BMI (${john.bmi})`
  );
} else if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} BMI (${mark.bmi})`
  );
} else {
  console.log(`BMIs (${mark.calcBMI() || john.calcBMI()}) are the same`);
}
