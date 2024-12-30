//Read 2 variables, named A and B and make the sum of these two variables, assigning its result to the variable X. Print X as shown below. Print endline after the result otherwise you will get “Presentation Error”
const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const A = parseInt(input[0]);
const B = parseInt(input[1]);
const X = A + B;
console.log("X = " + X);
