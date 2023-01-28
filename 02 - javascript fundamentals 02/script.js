// ⬇️ Activating Strict Mode
"use strict";

// great practice is to use 'use strict' mode always - errors are easier to find and debug

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; // we will get error in console with 'use strict' rule
if (hasDriversLicense) console.log("I can drive 🚘");

// const interface = "Audio"; // error again - 'use strict' mode is great

// ⬇️ Functions
function logger() {
  console.log("my name is luka");
}

// calling / running / invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 2);
console.log(appleJuice);
console.log(fruitProcessor(10, 9));

// DRY - dont repeat yourself - functions purpose
