let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let min=Math.min(...ages);
console.log("minimum: ",min);

let max=Math.max(...ages);
console.log("maximum: ",max);

let sorted=ages.sort();
console.log("Sorted array:",sorted);


const mid=Math.floor(sorted.length/2);
const median=sorted.length%2!==0?sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
console.log("Median:",median);


var total = 0;
var count = 0;
sorted.forEach(function(item){
    total+=item;
    count++;
});
var avg=total/count;
console.log("Average: ",avg);

console.log("range of ages:",max-min);

let min_average=Math.abs(min-avg);
console.log("min-average:",min_average);

let max_average=Math.abs(max-avg);
console.log("max-average:",max_average);