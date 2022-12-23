let johnMass=75;
let markMass=55;
let johnHeight=1.90;
let markHeight=1.45;
let calcBmi=(mass,height)=>{return mass/(height**2)};

let johnBmi=calcBmi(johnMass,johnHeight);
let markBmi=calcBmi(markMass,markHeight);

console.log("John's Bmi="+johnBmi);
console.log("Mark's Bmi="+markBmi);