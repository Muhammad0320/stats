import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResults";
import { Analyser } from "../Summary";

export class WinsAnalyses implements Analyser {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (const match of matches) {
      if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        wins++;
      }

      if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }

    return ` ${this.team} won ${wins} games `;
  }
}
