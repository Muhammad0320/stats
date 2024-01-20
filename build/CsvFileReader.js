"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs
            .readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map((row) => {
            return row.split(",");
        })
            .map((row) => [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ]);
    }
}
exports.CsvFileReader = CsvFileReader;
