"use strict";

console.log("---------- CODING CHALLENGES ----------");

// CODING CHALLENGE #1
console.log("----- CHALLENGE #1 -----");

// const juliasData = [3, 5, 2, 12, 7];
// const katesData = [4, 1, 15, 8, 3];
const juliasData = [9, 16, 6, 8, 3];
const katesData = [10, 5, 6, 1, 4];

(function checkDogs(julia, kate) {
  const dogsJulia = [...julia.slice(1, -2)];
  const dogsTotal = [...dogsJulia, ...kate];
  dogsTotal.forEach((dog, i) => {
    const ageLabel =
      dog >= 3 ? `an adult, and is ${dog} years old` : `still a puppy 🐶`;
    console.log(`Dog number ${i + 1} is ${ageLabel}`);
  });
})(juliasData, katesData);

// CODING CHALLENGE #2
console.log("----- CHALLENGE #2 -----");

const calcAverageHumanAge = (dogs) => {
  const humanDogs = dogs.map((dog) => (dog <= 2 ? dog * 2 : 16 + dog * 4));
  const adultDogs = humanDogs.filter((dog) => dog > 18);
  // const average = adultDogs.reduce((acc, dog) => acc + dog, 0) / adultDogs.length;
  const average = adultDogs.reduce(
    (acc, dog, _, arr) => acc + dog / arr.length,
    0
  );
  return average;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// CODING CHALLENGE #2
console.log("----- CHALLENGE #4 -----");

const calcAverageHumanAgeArrow = (dogs) =>
  dogs
    .map((dog) => (dog <= 2 ? dog * 2 : 16 + dog * 4))
    .filter((dog) => dog > 18)
    .reduce((acc, dog, _, arr) => acc + dog / arr.length, 0);
console.log(calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]));
