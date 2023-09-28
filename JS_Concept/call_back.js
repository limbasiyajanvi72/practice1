const one = ()=>{
    console.log("i am one");
};

const two=()=>{
    console.log("i am two");
    setTimeout(()=>{
        console.log("hello");
    },3000);
};

const three=()=>{
    console.log("i am three");
};

one();
two();
three();