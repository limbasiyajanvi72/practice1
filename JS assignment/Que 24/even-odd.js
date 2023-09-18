let even=[];
let odd=[];

for(let x=1;x<=100;x++){
    if(x%2==0){
      even.push(x);  
    }
    else{
        odd.push(x);
    }
}

console.log("Even array:",even);
console.log("Odd array:",odd);