import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader';
import { MatchResult} from './MatchResult';

// Create an object that satisfis the 'DataReader' interface 
const csvFileReader = new CsvFileReader('original.csv');


// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


let manUnitedWins = 0;

for (let match of matchReader.matches){
    if (match[1] === 'Man United' && match[5] === MatchResult.homeWin){
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin){
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);