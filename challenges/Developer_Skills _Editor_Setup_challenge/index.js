let data1 = [17, 21, 23];
let data2 = [12,5,-5,0,4]; 

function printForecast(arr){
    let str = "";
    for(let i=0;i<arr.length;i++){
        str += `... ${arr[i]}deg C in ${i + 1} days`
    }
}