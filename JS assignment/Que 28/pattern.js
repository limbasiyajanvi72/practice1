let num1=3;
let string="";
        for(let i=1;i<=num1;i++){
            for(let j=1;j<=i;j++){
             string+="* ";
            }
            string+="\n";
        }

console.log(string);

let num2=3;
let pattern="";
for(let k=1;k<=num2;k++){
    for(let m=1;m<=num2;m++){
        pattern+="* ";
    }
    pattern+="\n";
}
console.log(pattern);

let num3=3;
let pyramid="";
for(let x=1;x<=num3;x++){
    for(let y=x;y<=num3-1;y++){
        pyramid+=" ";
    }
    for(let n=1;n<=x;n++){
        pyramid+="*";
    }
    for(let z=1;z<=x-1;z++){
        pyramid+="*";
    }
    pyramid+="\n";
}

console.log(pyramid);