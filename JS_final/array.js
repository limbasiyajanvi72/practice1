let name=['Hiteh sir', 'Anurag sir','Surya', 'Anirudh','Bipul'];
console.log(name);
console.log(name.length);
console.log(name[2]);
console.log(name[name.length-1]);
name[4]='Vinay';
console.log(name);

let names=new Array('name1', 'name2','name3');
console.log(names);

name.push('Vyom');
console.log(name);
console.log(name.slice(1,3));
console.log(name.slice(1,4));

// let fruit=['apple','bada apple','chota apple', 'double apple'];
// fruit.splice(2,1,'khrab apple','acha apple');
// console.log(fruit);


let arr1=[1,2,3,4];
let arr2=[4,5,6,7];
let arr3=[8,9];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2,arr3));

let arr4=[1,2,3,4,5,6,7,8,9];
arr4.fill('Anurag sir',2,4);
console.log(arr4);

let num=[1,2,3,4,5,6,7,8];
console.log(num.includes(8,7));
console.log(num.indexOf(3));
console.log(Array.isArray(num));

let num1="anurag sir";
console.log(Array.isArray(num1));

let Arr1=[1,2,3,4,5,6,7];
console.log(Arr1.join(''));

console.log(Arr1.join('And'));

let var1=Arr1.join('1');
console.log(var1);
console.log(typeof var1);

let num2=[1,2,3,'Anurag sir',4,5,6,7,8,'Anurag sir', 'Anurag sir'];
console.log(num2.lastIndexOf('Anurag sir'));

let maths=[1,4,9,16,25];
console.log(maths.map(Math.sqrt));
console.log(maths.pop());
console.log(maths);
console.log(maths.reverse());
console.log(maths.shift());
console.log(maths);

let name2=['Hitesh sir','Anurag sir','Bipul','Anirudh sir', 'Surya'];
console.log(name2.sort());

let fruit=['apple','bada apple','chota apple', 'double apple'];
console.log(fruit.unshift('apple1','grape2'));
console.log(fruit);



let a='anurag sir';
let arr=a.split('');
console.log(arr);


 upperfruit= [];
for(const badaleteer of fruit){
    upperfruit.push(badaleteer.toUpperCase());
}
console.log(upperfruit);

for(let i=0;i<=5; i++){
    if(i==3){
        break;
    }
    console.log(i);
}

for(let j=0;j<=5; j++){
    if(j==3){
        continue;
    }
    console.log(j);
}