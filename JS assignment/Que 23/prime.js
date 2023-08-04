let num=24;
let prime=true;
        
        for(let i=2;i<num;i++){
            if(num%i==0){
                prime=false;
            }        
        }
    if(prime){
        console.log("number is prime");
    }
    else{
        console.log("number is not prime");
    }