let koalas = [12,33,22];
let dolphins = [22,74,65];

const calcAverage = (scor1,scor2,scor3)=>{
    let avg = (scor1+scor2+scor3)/3;
    return avg;
}
const koalasAvg = calcAverage(...koalas);
const dolphinsAvg = calcAverage(...dolphins);

const checkWinner = (dolAvg,kolAvg)=>{
    if(dolAvg>(2*kolAvg)){
        console.log("Dolphins are the winners!");
    }else if(kolAvg>(2*dolAvg)){
        console.log("koalas are the winners!");
    }else{
        console.log("no winner");
    }
}
console.log(checkWinner(koalasAvg, dolphinsAvg));