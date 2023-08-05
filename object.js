let username={
    firstName:'janvi',
    lastName:'limbasiya',
    role:'user',
    logincount:23
}

console.log(username);
console.log(username.role);
username.logincount=42;
console.log(username.logincount);

for(let x in username){
    console.log(x,username[x]);
}