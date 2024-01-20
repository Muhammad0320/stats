import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResults";

const fileRead = new CsvFileReader("football.csv");

const reader = new MatchReader(fileRead);

reader.load();

let manUnitedWins = 0;

for (const match of reader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }

  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);

// muhammawwal@005
