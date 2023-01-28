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
