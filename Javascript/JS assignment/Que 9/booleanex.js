let x=10;
let y=20;

let falsy=x>y;
console.log("falsy answer:",falsy);

let truthy=x<y;
console.log("truthy answer:",truthy);

console.log('Everything with value is :',Boolean(100));
let z=0;
console.log('Everything with 0 is', Boolean(z));

let p;
console.log("Undefined gives: ",Boolean(p));
let n=null;
console.log('Null gives:',Boolean(n));

let nameIs='Janvi';
console.log('String always gives :',Boolean(nameIs));