let age=20;
if(age>18){
    console.log("You are allowed to vote.");
}

let i=100;
if(i>=100){
    console.log("number is bigger than or equal to 100");
}
else{
    console.log("number is less than 100");
}

let j=9;
if(j==0){
    console.log("Assign to room no.0");
}
else if(j==1){
    console.log("Assign to room Node.1");
}
else if(j==2){
    console.log("Assign to room no.2");
}
else{
    console.log("You are not eligible");
}

let k="visitor";
switch(k){
    case"admin":
    console.log("you are admin");
    break;

    case "mentor":
    console.log("yiu are mentor");
    break;

    case"user":
    console.log("you are user");
    break;

    default:
        console.log("you are vistor");
        break;
}

let userlogin=true;
userlogin?console.log("logout"):console.log("login");

let name=["xuz","xyz","abc","pqr","lmn"];
console.log(name);
console.log(name[0]);

let bankaccount={
    firstName:'abcd',
    lastName:'pqrs',
    mobile:"9900990099",
    balance:10000
};
console.log(bankaccount);
console.log(bankaccount.mobile);