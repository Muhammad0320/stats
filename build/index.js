"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResults_1 = require("./MatchResults");
const fileRead = new CsvFileReader_1.CsvFileReader("football.csv");
const reader = new MatchReader_1.MatchReader(fileRead);
reader.load();
let manUnitedWins = 0;
for (const match of reader.matches) {
    if (match[1] === "Man United" && match[5] === MatchResults_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    if (match[2] === "Man United" && match[5] === MatchResults_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
// muhammawwal@005
