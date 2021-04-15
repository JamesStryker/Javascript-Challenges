// Coding Challenge #3
// Test data:
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let dolAvg = (96 + 108 + 89)/3;
let kolAvg = (88 + 91 + 110)/3;

if(dolAvg<100 && kolAvg<100){
    console.log("no winner until you average 100")
}else{
    if(dolAvg > kolAvg){
        console.log("Dolphins beat Koalas!")
    }else if (dolAvg < kolAvg){
        console.log("Koalas beat Dolphins!")
    }else{
        console.log("It's a tie!")
    }
}
