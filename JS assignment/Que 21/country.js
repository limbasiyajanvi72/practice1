let country=['India','China','America','Ethiopia' ];

if(country.includes('Ethiopia')){
    let x=country.indexOf('Ethiopia');
    let y=country[x].toUpperCase();
    console.log(y);
}

else{
    country.push('Ethiopia' );
    console.log(country);
}