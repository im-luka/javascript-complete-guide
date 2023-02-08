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

// CODING CHALLENGE #1
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
