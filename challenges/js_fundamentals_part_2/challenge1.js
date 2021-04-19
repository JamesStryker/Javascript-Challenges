/* Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! 
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores 
is calculated (so one average score per team).
A team only wins if it has at least double the average score of 
the other team. Otherwise, no team wins!*/

let dolphinsScores = [44,23,71];
let koalasScores = [165,154,149]; 
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let dolphinsAvg = (dolphinsScores.reduce(reducer))/dolphinsScores.length;
let koalasAvg = (koalasScores.reduce(reducer))/koalasScores.length;

const checkWinner = (a,b)=>{
    if(a>b*2){
        console.log(`dolphins are the winner`)
    }else if(b>a*2){
        console.log(`koalas are the winner`)
    }else console.log(`there is no winner`)
}

checkWinner(dolphinsAvg, koalasAvg);