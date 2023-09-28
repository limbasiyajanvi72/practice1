try {
    console.log(janvi);
    
} catch (error) {
    console.log(error.name);
}

try {
    let firstName="Janvi";
    console.log(firstName);
} catch (error) {
    console.log(error.name,"Variable is missing");
}

finally{
    console.log("I will run at any cost");
}


