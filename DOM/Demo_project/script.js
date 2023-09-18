let val=document.getElementById("btn");


const randomColor=  ()=>{
    let value="0123456789ABCDEF";
    let cons="#";

    for(let i=0;i<6;i++){
        cons=cons+value[Math.floor(Math.random()*16)];
    }
    return cons;
};

val.addEventListener("click",changeColor=()=>{
    document.body.style.backgroundColor=randomColor();
});


