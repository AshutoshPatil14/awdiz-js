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