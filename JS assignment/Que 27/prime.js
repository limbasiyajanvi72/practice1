let count=0;
let arr=[];
let i,j 
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++;
  
}

if(count==2){
arr.push(j);
}
count=0;

}

console.log("Array of prime number from 0 to 100:",arr);



