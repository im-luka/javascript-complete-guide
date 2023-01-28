// ⬇️ Activating Strict Mode
"use strict";

// great practice is to use 'use strict' mode always - errors are easier to find and debug

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // we will get error in console with 'use strict' rule
if (hasDriversLicense) console.log("I can drive 🚘");

const interface = "Audio"; // error again - 'use strict' mode is great
