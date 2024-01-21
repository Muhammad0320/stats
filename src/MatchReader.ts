import { CsvFileReader } from "./CsvFileReader";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResults";
import { dateStringToDate } from "./utils";

interface MatchType {
  data: string[][];
  read(): void;
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: MatchType) {}

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  load(): void {
    this.reader.read();

    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    );
  }
}
