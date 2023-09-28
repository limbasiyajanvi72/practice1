function sumone(x,y){
    return x+y;
}

let vari=[5,6];

console.log(sumone(...vari));

let vari2=[5,6,11,12];

console.log(sumone(...vari2));

function sum(...args) {
    console.log(args);

    let sum=0;
    for(const x of args){
        sum=sum+x;
    }
    return sum;
}

console.log(sum(0,1,2,3,4,5));