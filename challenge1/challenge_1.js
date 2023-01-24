let johnMass=75;
let markMass=55;
let johnHeight=1.90;
let markHeight=1.45;
let calcBmi=(mass,height)=>{return mass/(height**2)};

let johnBmi=calcBmi(johnMass,johnHeight);
let markBmi=calcBmi(markMass,markHeight);

console.log("John's Bmi="+johnBmi);
console.log("Mark's Bmi="+markBmi);

if (johnBmi>markBmi){
    console.log(`John's BMI is higher than Mark's!`);
}else if (johnBmi<markBmi){
    console.log(`Mark's BMI is highest than John's!`);
}else{
    console.log("Both have the same BMI");
}

console.log(`John has ${johnBmi} and Mark has ${markBmi}`)