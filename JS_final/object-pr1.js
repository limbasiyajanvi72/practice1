// 'this keyword'
console.log("this keyword in editor:",this);
const object={}
console.log("empty object:",object);

// Normal object creation
const obj1={
    rocket:"🚀",
    home:"🏠"
}

// For-in loop in object
for(let k in obj1){
    console.log(k);
    console.log(obj1[k]);
}

// Object inside an object
const obj2={
    rocket:"🚀",
    fuel:2,
    config :{
        name:"mars"
    }
}

// Adding values in object
obj2.fuel=200;
obj2['year']=2023;

console.log(obj2.fuel);
console.log(obj2.year);


// Creating object by using constructor
const obj3=new Object();
obj3.redbook="red";
obj3.bluebook="blue";
obj3.myvalue=3;

console.log(obj3);

//Inheritance or copying of object
const power={
    fly:true,
    coordinate:Math.random()+2
}

const obj4=Object.create(power);

console.log(obj4);
console.log(obj4.fly);

console.log(Object.getPrototypeOf(obj4));

const obj5=Object.create({});
Object.defineProperty(obj5, 'book',
{
    get:()=>'blue-book',
    enumerable:true
})

console.log(obj5);
console.log(Object.getPrototypeOf(obj5));
console.log(obj5.book);

for (k in obj5){
    console.log(k);
}

const obj6={
    comics:'marvel',
    pen:'',

    printComic:function(){
        this.pen+='blue-pen',
        console.log(this);
        return this;
    },

    printaComic:()=>{
        console.log(this);
    }
}

// console.log(obj6.printComic());
// console.log(obj6.printaComic());

console.log(obj6.printComic().printComic());

const stu={
    firstname:'Monica',
    set changename(newname){
        this.firstname=newname;
    }
};
console.log(stu.firstname);
stu.changename='sarah';
console.log(stu.firstname);

const value = {
    first: 1,
    second: 2,

    __proto__: {
      third: 3,
      forth: 4,
    },
  };

  console.log(value.first);
  console.log(value.second);
  console.log(value.third);
  console.log(value.forth);