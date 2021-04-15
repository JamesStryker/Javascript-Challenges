// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever 
// he goes eating in a restaurant. In his country, 
// it's usual to tip 15% if the bill value is between 50 and 300. 
// If the value is different, the tip is 20%.

let bill = parseInt(prompt("what is the bill's total?"));
let tip = "";

bill>=50 && bill<=300 ? tip = .15 : tip=.2;
let total = bill + bill*tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);

