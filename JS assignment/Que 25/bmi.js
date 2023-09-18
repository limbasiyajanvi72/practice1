let height=1.5;
let weight=50;

function bmi(height,weight){
let bmi=weight/(height*height);
console.log("bmi is:",bmi);

if(bmi<18.5){
    console.log("you are underweight");
}

else if(bmi>18.5 && bmi<24.9){
    console.log("your weight is normal");
}

else if(bmi<29.9 && bmi>25){
    console.log("you are overweight");
}

else{
    console.log("you are obese");
}

}

bmi(height,weight);