"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyses = void 0;
const MatchResults_1 = require("../MatchResults");
class WinsAnalyses {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (const match of matches) {
            if (match[1] === "Man United" && match[5] === MatchResults_1.MatchResult.HomeWin) {
                wins++;
            }
            if (match[2] === "Man United" && match[5] === MatchResults_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return ` ${this.team} won ${wins} games `;
    }
}
exports.WinsAnalyses = WinsAnalyses;
