import  { MatchData } from "./MatchData";
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from "./Analysers/WinsAnalysis";


export interface Analyser {
    run(matches: MatchData[]): string;
}

export interface OutputTarget{
    print(report: string): void;
}

export class Summary {
    static winAnalysisWithHtmlReport(teams: string){
        return new Summary(
            new WinsAnalysis(teams),
            new HtmlReport()
        );
    }


    constructor(
        public analyser: Analyser,
        public outputTarget: OutputTarget
        ){}


    buildAndPrintReport(matches: MatchData[]):void{
        const output = this.analyser.run(matches);
        this.outputTarget.print(output);
    }
}