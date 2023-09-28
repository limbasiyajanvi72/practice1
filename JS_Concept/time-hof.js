function myfun(){
    console.log("hello");
}

setTimeout(myfun,3000);

setTimeout(()=>{
    console.log("how are you?");
},4000);

setInterval(()=>{
    console.log("how do you do?");
},2000)