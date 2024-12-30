//The formula to calculate the area of a circumference is defined as A = π . R2. Considering to this problem that π = 3.14159:
const R = parseFloat(require('fs').readFileSync('/dev/stdin', 'utf8')); //read the float value of R 
const π = 3.14159; 
const A = π * R * R; 
console.log("A=" + A.toFixed(4));//Here toFixed(4) i used for taking four places after the decimal point
