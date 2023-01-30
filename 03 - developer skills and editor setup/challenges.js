// CODING CHALLENGE #1

const printForecast = arr => {
  let temps = '... ';
  for (let i = 0; i < arr.length; i++) {
    temps += `${arr[i]}ºC in ${i + 1} days... `;
  }
  return temps;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
