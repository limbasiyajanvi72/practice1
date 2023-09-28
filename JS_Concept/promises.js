const one = ()=>{
    return "i am one";
};

const two=()=>{
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("credential correct");
        },3000)
    });
};

const three=()=>{
    return "i am three";
};

const callMe= async () =>{

    let valone=one();
    console.log(valone);

    let valtwo= await two();
    console.log(valtwo);

    let valthree=three();
    console.log(valthree);
};

callMe();