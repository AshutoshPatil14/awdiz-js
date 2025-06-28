//if-else example to check if a number is even or odd
let num = 54;

if (num % 2 === 0) {
  console.log(num + " is Even Number");
} else {
  console.log(num + " is Odd Number");
}


// Switch case example for basic arithmetic operations
let num1 = 10;
let num2 = 20;

let operator = "+";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;

  case "-":
    console.log(num1 - num2);
    break;

  case "*":
    console.log(num1 * num2);
    break;

  case "/":
    console.log(num1 / num2);
    break;

  default:
    console.log("Invalid Operator");
    break;
}
