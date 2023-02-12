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
