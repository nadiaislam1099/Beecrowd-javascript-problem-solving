//The formula to calculate the area of a circumference is defined as A = π . R2. Considering to this problem that π = 3.14159:
const R = parseFloat(require('fs').readFileSync('/dev/stdin', 'utf8'));
const π = 3.14159; 
const A = π * R * R; 
console.log("A=" + A.toFixed(4));