"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var WinsAnalysis_1 = require("./Analysers/WinsAnalysis");
var Summary = /** @class */ (function () {
    function Summary(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    Summary.winAnalysisWithHtmlReport = function (teams) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teams), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyser.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
