//Coding Challenge #3

let mark = {
    fullname: "mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi= this.mass/(this.height**2)
        return this.bmi;
   }
};


let john = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi= this.mass/(this.height**2)
        return this.bmi;
   }
};
john.calcBMI();
mark.calcBMI();

if(john.bmi>mark.bmi){
    console.log(`${john.fullname} has a higher BMI than ${mark.fullname}`)
}else if(john.bmi == mark.bmi){
    console.log("they have equal BMI's")
}else
    console.log(`${mark.fullname} has a higher BMI than ${john.fullname}`)
