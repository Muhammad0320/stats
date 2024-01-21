import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinsAnalyses } from "./analyser/WinsAnalysis";
import { HTMLReporter } from "./reportTarget/HTMLReport";

const fileRead = new CsvFileReader("football.csv");

const reader = new MatchReader(fileRead);

reader.load();

const summary = new Summary(new WinsAnalyses("Man United"), new HTMLReporter());

summary.buildAndPrintReport(reader.matches);
