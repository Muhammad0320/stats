import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";

const fileRead = new CsvFileReader("football.csv");

const reader = new MatchReader(fileRead);

reader.load();
