import { CsvFileReader } from './CsvFileReader'

const reader = new CsvFileReader('original.csv');
reader.read();


enum MatchResult {
    homeWin = 'H',
    awayWin = 'A',
    draw = 'D',
};


let manUnitedWins = 0;

for (let match of reader.data){
    if (match[1] === 'Man United' && match[5] === MatchResult.homeWin){
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin){
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);