function daysInMonth(month, year) {
    return new Date(year, month,0).getDate();
}
 
function GFG_Fun() {
    let month = 2;
    let year = 2023;
    console.log("Number of days in " + month
        + " and month of the year " + year
        + " is " + daysInMonth(month, year));
}
GFG_Fun();