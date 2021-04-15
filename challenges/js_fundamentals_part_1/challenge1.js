// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark's and John's mass and height in variables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markMass/(markHt*markHt);'containinginformationabout
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
const markHt = 1.95;
const johnHt = 1.69;
const markMass = 78;
const johnMass = 92;
const markBMI = markMass/(markHt*markHt);
const johnBMI = johnMass/(johnHt*johnHt);

const markBmiHigher = markBMI > johnBMI;
console.log(markBmiHigher);