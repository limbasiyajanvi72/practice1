function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length; i++){
        sum=sum+arr[i];
    }
    return sum;
}
let sumarray=[1,2,3,4,5,6];
let ans=sum(sumarray);
console.log(ans);

function sum2(){
    let sum=0;
    console.log(arguments);
    for(let j=0;j<arguments.length;j++){
        sum=sum+arguments[j];
    }
    return sum;
}

console.log(sum2(1,2,3,4,4,5));

let xyz=()=>{
    console.log("This is arrow function");
}

xyz();

let sum3=(v1,v2)=>{
    console.log("addition:",v1+v2);
}

sum3(10,60);