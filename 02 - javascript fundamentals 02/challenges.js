// CODE CHALLENGE #1

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
