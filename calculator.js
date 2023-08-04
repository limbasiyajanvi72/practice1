function sum(){
    let a=10;
    let b=20;
    console.log("addition",a+b);
}
sum();

function sum1(val1,val2){
    console.log("addition",val1+val2);
}
sum1(20,40);

function sum2(v1,v2){
    add=v1+v2;
    return add;
}

let addition=sum2(20,67);
console.log("addition",addition);

function sub(s1,s2){
    let sub=s1-s2;
    return sub;
}

let subt=sub(55,12);
console.log("subtraction: ",subt);

function mul(s1,s2){
    let mul=s1*s2;
    return mul;
}

let mult=mul(55,12);
console.log("multiplication: ",mult);

function div(d1,d2){
    let div=d1/d2;
    return div;
}

let divi =div(55,11);
console.log("division: ",divi);

function mod(m1,m2){
    let mod=m1-m2;
    return mod;
}

let reminder=mod(55,12);
console.log("reminder: ",reminder);

function url(url,domain){
    con="https://";
    mysite=con+url+domain;
    return mysite;
}
let site=url('anuragtiwari','.me');
console.log(site);

