"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ⬇️ destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// better way of doing this ↖
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories; // skipping item
console.log(main, secondary);

// Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

// ⬇️ destructuring objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let w = 111;
let e = 999;
const obj = { w: 23, e: 7, r: 14 };
({ w, e } = obj);
console.log(w, e);

// Nested objects
const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 2,
});

// ⬇️ spread operator
const array = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const goodNewArray = [1, 2, ...arr];
console.log(goodNewArray);
console.log(...goodNewArray);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const combinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(combinedMenu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "luka";
const letters = [...str, "", "d."];
console.log(letters);
console.log(...str);
// console.log(`${...str} d.`) // not working

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

// ⬇️ rest pattern and parameters

// 1) DESTRUCTURING
// SPREAD, because on RIGHT side of =
const arrr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [o, l, ...others] = [1, 2, 3, 4, 5];
console.log(o, l, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 7, 2, 9, 1, 3, 5);

const s = [13, 5, 7];
add(...s);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");

// ⬇️ short circuiting (&& and ||)
// use ANY data type, return ANY data type, short-circuiting

// ||
console.log("----- OR -----");
console.log(3 || "luka");
console.log("" || "luka");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// &&
console.log("----- AND -----");
console.log(0 && "luka");
console.log(7 && "luka");

console.log("Hello" && 23 && null && "luka");

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("salad", "cheese");

// ⬇️ nullish coalescing operator

restaurant.numGuests = 0;
const newGuests = restaurant.numGuests || 10;
console.log(newGuests);

// Nullish: null and undefined (NOT 0 or "")
const newGuestsCorrect = restaurant.numGuests ?? 10;
console.log(newGuestsCorrect);
