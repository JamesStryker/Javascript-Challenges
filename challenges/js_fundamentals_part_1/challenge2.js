// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
const markHt = 1.95;
const johnHt = 1.69;
const markMass = 78;
const johnMass = 92;
const markBMI = markMass/(markHt*markHt);
const johnBMI = johnMass/(johnHt*johnHt);
if(markBMI>johnBMI){
    console.log(`mark's BMI is ${markBMI}, and greater than john's BMI (${johnBMI})`);
}else{
    console.log(`john's BMI is ${johnBMI}, and greater than mark's BMI (${markBMI})`);
}