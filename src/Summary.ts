import { MatchData } from "./MatchData";
import { WinsAnalyses } from "./analyser/WinsAnalysis";
import { HTMLReporter } from "./reportTarget/HTMLReport";

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyser: Analyser, public outputTarget: OutputTarget) {}

  static printwithBuild(team: string): Summary {
    const analyser = new WinsAnalyses(team);
    
    const outputTarget = new HTMLReporter();

    return new Summary(analyser, outputTarget);
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyser.run(matches);

    this.outputTarget.print(output);
  }
}
