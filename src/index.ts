import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResults";

const reader = new MatchReader("football.csv");

reader.read();

let manUnitedWins = 0;

for (const match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }

  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);

// muhammawwal@005
