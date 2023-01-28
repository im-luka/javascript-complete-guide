// CODING CHALLENGE #1

// test #1
let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

//test #2
weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;
const markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);

// CODING CHALLENGE #2

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else if (bmiJohn > bmiMark) {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
} else {
  console.log(`Mark & John have the same BMI (${bmiMark || bmiJohn})`);
}

// CODING CHALLENGE #3

const dolphinsScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 106) / 3;

console.log("Dolphins score", dolphinsScore);
console.log("Koalas score", koalasScore);

if (dolphinsScore >= 100 || koalasScore >= 100) {
  if (dolphinsScore > koalasScore) {
    console.log("Dolphins are the winners! 🐬");
  } else if (koalasScore > dolphinsScore) {
    console.log("Koalas are the winners! 🐨");
  } else {
    console.log("Result is tied! 🟰");
  }
} else {
  console.log("There is no winner! ❌");
}
