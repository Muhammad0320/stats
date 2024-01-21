"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const fileRead = new CsvFileReader_1.CsvFileReader("football.csv");
const reader = new MatchReader_1.MatchReader(fileRead);
reader.load();
