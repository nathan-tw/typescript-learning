import fs from 'fs';

const matches = fs.readFileSync('original.csv', {
    encoding: 'utf-8'
})
.split('\n')
.map((row: string): string[] => {
    return row.split(',');
})


enum MatchResult {
    homeWin = 'H',
    awayWin = 'A',
    draw = 'D',
};


let manUnitedWins = 0;

for (let match of matches){
    if (match[1] === 'Man United' && match[5] === MatchResult.homeWin){
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin){
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);