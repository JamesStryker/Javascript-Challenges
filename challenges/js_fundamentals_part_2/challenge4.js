//Tip Calculator challenge
let tip;
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

//write a function that calculates tips
function calcTip(bill){
        if(bill>300){
            tip = 0.1;
        }else if( bill<=300 && bill>=50){
            tip = 0.15;
        }else tip = 0.2;

        return tip;
    };
//write a fn that loops through the bills array to get the tips array
function getTips(arr){
    for(let i=0;i<arr.length;i++){
        tips.push(calcTip(arr[i])*arr[i]);
    }
};

//run the function to fill out the tips array
getTips(bills);

//write a fn to loop through both the tips and bills array to get the total
function getTotal(arr1, arr2){
    for(i=0;i<arr1.length;i++){
       totals.push(bills[i]+tips[i]);
    }
    return totals;
}
getTotal(bills,tips);
console.log(totals);