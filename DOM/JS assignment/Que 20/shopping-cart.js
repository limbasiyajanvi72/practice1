const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if(shoppingCart.includes('Meat')==false){
    shoppingCart.unshift('Meat');
    console.log("After adding meat:",shoppingCart);
}

if(shoppingCart.includes('Sugar')==false){
    shoppingCart.push('Sugar');
    console.log("After adding sugar:",shoppingCart);
}

let x=shoppingCart.indexOf('Honey');
shoppingCart.splice(x,1);
console.log("After removing honey: ",shoppingCart);

let y=shoppingCart.indexOf('Tea');
shoppingCart[y]='Green Tea';
console.log('Replacing Tea with Green Tea:',shoppingCart);

