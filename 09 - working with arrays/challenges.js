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

// CODING CHALLENGE #3
console.log("----- CHALLENGE #3 -----");

const calcAverageHumanAgeArrow = (dogs) =>
  dogs
    .map((dog) => (dog <= 2 ? dog * 2 : 16 + dog * 4))
    .filter((dog) => dog > 18)
    .reduce((acc, dog, _, arr) => acc + dog / arr.length, 0);
console.log(calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]));

// CODING CHALLENGE #4
console.log("----- CHALLENGE #4 -----");

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
console.log(dogs);

const checkOkFoodAmount = ({ curFood, recommendedFood }) =>
  curFood >= recommendedFood * 0.9 && curFood <= recommendedFood * 1.1;

// 1.
dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// 2.
const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating too ${
    sarahsDog.curFood < sarahsDog.recommendedFood ? "little" : "much"
  }`
);

// 3.
const getOwners = (eatCondition) =>
  dogs.filter(eatCondition).flatMap((dog) => dog.owners);

const ownersEatTooMuch = getOwners((dog) => dog.curFood > dog.recommendedFood);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = getOwners(
  (dog) => dog.curFood < dog.recommendedFood
);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5.
console.log(
  `Dog eating just right: ${dogs.some(
    (dog) => dog.curFood === dog.recommendedFood
  )}`
);

// 6.
console.log(`Dog eating ok: ${dogs.some(checkOkFoodAmount)}`);

// 7.
const okDogs = dogs.filter(checkOkFoodAmount);
console.log(okDogs);

// 8.
const shallowDogs = [...dogs];
shallowDogs.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(shallowDogs);
