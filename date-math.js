const now=new Date();
console.log(now);
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getTime());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

const Pi= Math.PI;
console.log(Pi);
console.log(Math.round(Pi));
console.log(Math.floor(Pi));
console.log(Math.ceil(Pi));
console.log(Math.random());

console.log("while-loop");
let i=0;
while(i<=5){
console.log(i);
i++;
}

console.log("do-while");
let j=0;
do{
    console.log(j);
    j++;
}while(j<=5)

console.log("for-loop");
for(let k=0; k<=5;k++ ){
    console.log(`${k}*${k}=${k*k}`);
}
