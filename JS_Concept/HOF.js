function callback(n){
    return n*n;
}

function cube(callback,n){
 return callback(n)*n;
}

console.log(cube(callback,3));

const arr=[1,2,3,4,5,6];

function myfun(val){
    console.log(val);
}

arr.forEach(myfun);

const arr1=[1,2,3,4,5];

arr1.forEach((val)=>{
    console.log(val);
})