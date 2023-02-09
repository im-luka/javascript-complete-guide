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

// ⬇️ Destructuring Arrays

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

// ⬇️ Destructuring Objects

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

// ⬇️ Spread Operator

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

// ⬇️ Rest Pattern and Parameters

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

// ⬇️ Short Circuiting (&& and ||)
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

// ⬇️ Nullish Coalescing Operator

restaurant.numGuests = 0;
const newGuests = restaurant.numGuests || 10;
console.log(newGuests);

// Nullish: null and undefined (NOT 0 or "")
const newGuestsCorrect = restaurant.numGuests ?? 10;
console.log(newGuestsCorrect);

// ⬇️ Logical Assignment Operator

const restaurant1 = {
  name: "Capri",
  numGuests: 20,
};

const restaurant2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR assignment operator
// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;

restaurant1.numGuests ||= 10;
restaurant2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

// AND assignment operator
// restaurant1.owner = restaurant1.owner && "<ANONYMOUS>";
// restaurant2.owner = restaurant2.owner && "<ANONYMOUS>";

restaurant1.owner &&= "<ANONYMOUS>";
restaurant2.owner &&= "<ANONYMOUS>";

console.log(restaurant1);
console.log(restaurant2);

// ⬇️ The 'for-of' Loop

const mainMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of mainMenu) {
  console.log(item);
}

for (const [i, el] of mainMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
console.log([...mainMenu.entries()]);

// ⬇️ Enhanced Object Literals

const weekdays2 = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHourse = {
  [weekdays2[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays2[4]]: {
    open: 11,
    close: 23,
  },
  // [`day-${2 + 3}`]: {
  [weekdays2[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurante = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // enhanced object literals
  // openingHourse: openingHourse, // instead of this
  openingHourse, // do this

  // enhanced functions!
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurante);

// ⬇️ Optional Chaining

if (restaurante.openingHourse && restaurante.openingHourse.mon) {
  console.log(restaurante.openingHourse.mon.open); // would throw error if there is no if condition
}

// with optional chaining
console.log(restaurante.openingHourse.mon?.open);
console.log(restaurante.openingHourse?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurante.openingHourse[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurante.order?.(0, 1) ?? "Method does not exist");
console.log(restaurante.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [
  {
    name: "mike",
    email: "mike@mail.com",
  },
];

console.log(users[0]?.name ?? "User array empty");
console.log(users[1]?.name ?? "User does not exist");

// ⬇️ Looping Objects

// property NAMES
const properties = Object.keys(openingHourse);
console.log(properties);
let openStr = `We are open at ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// property VALUES
const values = Object.values(openingHourse);
console.log(values);

// Entire object
const entries = Object.entries(openingHourse);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// ⬇️ Sets

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

console.log(new Set("luka"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

// Example - remove duplicates from array
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);
console.log(new Set("jasamlukakajima").size);

// ⬇️ Maps Fundamentals

const resto = new Map();
resto.set("name", "Classico Italiano");
resto.set(1, "Firence, Italy");
resto.set(2, "Lisbon, Portugal");

resto
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(resto.get("name"));
console.log(resto.get(true));
console.log(resto.get("1"));

const time = 21;
console.log(resto.get(time > resto.get("open") && time < resto.get("close")));

console.log(resto.has("categories"));
console.log(resto.delete(2));
// resto.clear();

const arrayy = [1, 2];
// resto.set([1, 2], "Test"); // not working - not the same in memory
resto.set(arrayy, "Test");
resto.set(document.querySelector("h1"), "Heading");
console.log(resto);
console.log(resto.size);

// console.log(resto.get([1, 2])); // not working - not the same in memory
console.log(resto.get(arrayy));

// ⬇️ Maps Iteration

const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHourse));
const hoursMap = new Map(Object.entries(openingHourse));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// ⬇️ Strings - Part 01

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal")); // case sensitive

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = (seat) => {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got middle seat");
  } else {
    console.log("You got lucky");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("luka")); // JS under the hood converts all strings to String Object (this)
console.log(typeof new String("luka"));
console.log(typeof new String("lux").slice(1));

// ⬇️ Strings - Part 02

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "mIChaEl";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = "iamluka@mail.com";
const loginEmail = " IamLuka@MAil.COm \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim(); // you can chain methods
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = "288,97￡";
const priceUS = priceGB.replace("￡", "€").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replaceAll(/door/g, "gate"));

// Booleans
const newPlane = "Airbus A320neo";
console.log(newPlane.includes("A320")); // case sensitive - of course
console.log(newPlane.includes("Boeing"));
console.log(newPlane.startsWith("Air"));

if (newPlane.startsWith("Airbus") && newPlane.endsWith("neo")) {
  console.log("Part of the new Airbus family!");
}

// Practice
const checkBaggage = (items) => {
  const baggage = items.toLowerCase(); // easily comparing
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some foot and a pocket knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// ⬇️ Strings - Part 03

console.log("a+very+nice+string".split("+"));
console.log("Luka Dule".split(" "));

const [firstName, lastName] = "Luka Dule".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = (name) => {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("luka dule");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "-"));
console.log("luka".padStart(20, "+").padEnd(30, "-"));

const maskCreditCard = (number) => {
  const str = number + "";
  return str.slice(-4).padStart(str.length, "*");
};
console.log(maskCreditCard(4332877561197513));

// Repeat
const message2 = "Bad weather... All Departures Delayed...";
console.log(message2.repeat(5));

const planesInLine = (n) => {
  console.log(`There are ${n} planes in line ${"🛩️".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

// ⬇️ String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightsFormatted = flights.split("+");
console.log(flightsFormatted);

for (const item of flightsFormatted) {
  const [desc, from, to, time] = item.split(";");

  let str = "";
  if (desc.includes("Delayed")) {
    str += "🔴";
  }

  console.log(
    str
      .concat(
        desc.split("_").join(" "),
        " from ",
        from.slice(0, 4).toUpperCase(),
        " to ",
        to.slice(0, 4).toUpperCase(),
        " (",
        time.split(":").join("h"),
        ")"
      )
      .padStart(50, " ")
  );
}
