'use strict';

// ⬇️ Setting up Prettier & VS Code
// Prettier - the best extension for formatting your code
// custom configuration in .prettierrc file

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

// global snippets file -> create snippets as you want

// TODO: highlight extension - great support & customization ability

// ⬇️ Installing Node.js & Setting Up a Dev Environment
// Live Server - extension that is a muss (no need for reloading when making changes)
// npm i live-server -> another way of running the page without need for reloading

console.log(calcAge(45));

// ⬇️ Using Google, StackOverflow, MDN docs
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTemperature = arr => {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    if (typeof currNum !== 'number') continue;

    if (currNum > max) max = currNum;
    if (currNum < min) min = currNum;
  }

  return max - min;
};

console.log(calcTemperature(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTemperature2 = (arr1, arr2) => {
  const arrMerged = arr1.concat(arr2);
  let max = arrMerged[0];
  let min = arrMerged[0];

  for (let i = 0; i < arrMerged.length; i++) {
    const currNum = arrMerged[i];
    if (typeof currNum !== 'number') continue;

    if (currNum > max) max = currNum;
    if (currNum < min) min = currNum;
  }

  return max - min;
};

console.log(
  calcTemperature2(temperatures, [10, 55, 'error', 90, -4, -8, 11, 57])
);
