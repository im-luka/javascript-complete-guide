"use strict";

// CODING CHALLENGE #1
console.log("----- CHALLENGE #1 -----");

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x, team2 } = game.odds;
console.log(team1, x, team2);

function printGoals(...players) {
  for (let i = 0; i < players.length; i++) {
    let goals = 0;
    for (let j = 0; j < game.scored.length; j++) {
      if (game.scored[j] === players[i]) {
        goals++;
      }
    }
    console.log(`${players[i]}: ${goals} goals`);
  }
}
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

const {
  odds: { team1: t1, team2: t2 },
} = game;
console.log((t1 < t2 && `Team 1 wins ${t1}`) || `Team 2 wins ${t2}`);

// CODING CHALLENGE #2
console.log("----- CHALLENGE #2 -----");

for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

let averageOdd = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  averageOdd += odd;
}
console.log(`Average odd is: ${averageOdd / odds.length}`);

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(
    game[team] ? `Odd of victory ${game[team]}: ${odd}` : `Odd of draw: ${odd}`
  );
}

let scorers = {};
for (const players of game.scored.values()) {
  scorers[players] = scorers[players] ? scorers[players] + 1 : 1;
}
console.log(scorers);

// CODING CHALLENGE #3
console.log("----- CHALLENGE #3 -----");

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `Event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = `${min < 45 ? "FIRST" : "SECOND"} HALF`;
  console.log(`[${half}] ${min}: ${event}`);
}

// CODING CHALLENGE #4
console.log("----- CHALLENGE #4 -----");

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const convertData = (value) => {
  const data = value.trim().toLowerCase().split("_");
  for (let i = 1; i < data.length; i++) {
    data[i] = data[i][0].toUpperCase() + data[i].slice(1);
  }
  return data.join("").padEnd(20, " ");
};

const textAreaEl = document.querySelector("textarea");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {
  const values = textAreaEl.value.split("\n");
  for (const [i, val] of values.entries()) {
    console.log(convertData(val).concat(" ", "✅".repeat(i + 1)));
  }
});
