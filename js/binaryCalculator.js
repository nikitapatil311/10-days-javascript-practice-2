  // Utility function to convert binary string to decimal number
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

// Utility function to convert decimal number to binary string
function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}

// Get the result div element
const res = document.getElementById("res");

// Get the buttons
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");

// Initialize variables to store the operands and operator
let operand1 = "";
let operand2 = "";
let operator = "";

// Add click event listeners to the buttons
btn0.addEventListener("click", function() {
  operand1 += "0";
  res.innerHTML = operand1;
});

btn1.addEventListener("click", function() {
  operand1 += "1";
  res.innerHTML = operand1;
});

btnClr.addEventListener("click", function() {
  operand1 = "";
  operand2 = "";
  operator = "";
  res.innerHTML = "";
});

btnSum.addEventListener("click", function() {
  operator = "+";
  operand2 = operand1;
  operand1 = "";
});

btnSub.addEventListener("click", function() {
  operator = "-";
  operand2 = operand1;
  operand1 = "";
});

btnMul.addEventListener("click", function() {
  operator = "*";
  operand2 = operand1;
  operand1 = "";
});

btnDiv.addEventListener("click", function() {
  operator = "/";
  operand2 = operand1;
  operand1 = "";
});

btnEql.addEventListener("click", function() {
  let result;
  switch (operator) {
    case "+":
      result = binaryToDecimal(operand1) + binaryToDecimal(operand2);
      break;
    case "-":
      result = binaryToDecimal(operand2) - binaryToDecimal(operand1);
      break;
    case "*":
      result = binaryToDecimal(operand1) * binaryToDecimal(operand2);
      break;
    case "/":
      result = Math.floor(binaryToDecimal(operand2) / binaryToDecimal(operand1));
      break;
    default:
      result = 0;
  }
  res.innerHTML = decimalToBinary(result);
  operand1 = decimalToBinary(result);
  operand2 = "";
  operator = "";
});
