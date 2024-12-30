//Read two integer values, in this case, the variables A and B. After this, calculate the sum between them and assign it to the variable SOMA. Write the value of this variable.
process.stdin.on("data", (data) => {
    const [A, B] = data.toString().trim().split("\n").map(Number);
    console.log("SOMA = " + (A + B));
  });  // This code will be accepted in becrowd 

  // But this is a beginer problem ,so to read the input value we can use prompt 
  let A = parseInt(prompt("Enter your first interger value :"));
  let B = parseInt(prompt("Enter your second interger value :"));
  let SOMA = A + B;
  console.log("SOMA = " + SOMA);

  // And to make it more simple without read the integer values
  let A = 10;
  let B = 20;
  let SOMA = A + B;
  console.log("SOMA = " + SOMA);




  