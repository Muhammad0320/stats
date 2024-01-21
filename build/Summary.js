"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyser/WinsAnalysis");
const HTMLReport_1 = require("./reportTarget/HTMLReport");
class Summary {
    constructor(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    static printAndBuild(team) {
        const analyser = new WinsAnalysis_1.WinsAnalyses(team);
        const outputTarget = new HTMLReport_1.HTMLReporter();
        return new Summary(analyser, outputTarget);
    }
    buildAndPrintReport(matches) {
        const output = this.analyser.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
