// CODING CHALLENGE #1

const TYPE = {
  ARRAY: "array",
  STRING: "string",
};

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  displayResults(type) {
    if (type === TYPE.STRING) {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    } else if (type === TYPE.ARRAY) {
      console.log(this.answers);
    }
  },

  registerNewAnswer(type) {
    const answer = Number(
      prompt(`
      What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
      (Write option number)`)
    );

    if (answer && answer >= 0 && answer <= this.answers.length - 1) {
      this.answers[answer]++;
      this.displayResults(type);
    } else {
      console.log("Entered value is not correct ❌");
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll, TYPE.STRING));

// BONUS
const displayResultsGlobal = poll.displayResults;
displayResultsGlobal.call({ answers: [5, 2, 3] }, TYPE.ARRAY);
displayResultsGlobal.call({ answers: [1, 5, 3, 9, 6, 1] }, TYPE.STRING);

// CODING CHALLENGE #2

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document
    .querySelector("body")
    .addEventListener("click", () => (header.style.color = "blue"));
})();
