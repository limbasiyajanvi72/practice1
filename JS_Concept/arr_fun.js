let num=[1,2,3,4,5];
let squ=num.map((val)=>val*val)
console.log(squ);

const couunt=["India","Pakistan","China","Russia","Finland","England"]
const filtered=couunt.filter((val)=>val.includes("land"));
console.log(filtered);

const number=[1,2,3,4,5,6,7];
const sum=number.reduce((acc,curr)=>acc+curr,1);
console.log(sum);

const names=["Anurag","Anirudh","Hitesh sir","Vyom","Bishal"];
const rev=names.reverse();
console.log(rev);

const sorted=names.sort();
console.log(sorted);

const reverse=names.reverse();
console.log(reverse);

const sci=[2.72,3.14,9.81,37,100];
const [e,pi,grav,bodytemp,boilingtemp]=sci;
console.log(e,pi,grav,bodytemp,boilingtemp);

const arr1=[1,2,3];
let[var1,var2]=arr1;
console.log(var1,var2);

const arr2=[1,2,3,4,5,6];
let [num1,num2,...rest]=arr2;
console.log(num1,num2);
console.log(...rest);