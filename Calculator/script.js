"use strict";

// Initialize displayValue outside the function
// let displayValue = "";
// let firstNumber = "";
// let operator = "";
// let secondNumber = "";

// const numBtns = document.querySelectorAll(".displayNum");
// const inputField = document.querySelector(".input-field");
// const operatorButtons = document.querySelectorAll(".operator");
// const clearButton = document.querySelector("button:first-of-type");
// const calculateResult = document.querySelector(".calculateResult");

// // Function to update the display value
// function addClickedNumberToDisplay(e) {
//   displayValue += e.target.value;
//   inputField.value = displayValue;
// }

// // Event listeners for number buttons
// numBtns.forEach((numberButton) => {
//   numberButton.addEventListener("click", function (e) {
//     addClickedNumberToDisplay(e);
//   });
// });

// // Event listeners for operator buttons
// operatorButtons.forEach((operatorButton) => {
//   operatorButton.addEventListener("click", function (e) {
//     if (firstNumber === "") {
//       firstNumber = displayValue;
//       operator = e.target.innerText;
//       displayValue = "";
//       inputField.value = firstNumber;
//     }
//   });
// });

// // Event listener for clear button
// clearButton.addEventListener("click", function () {
//   displayValue = "";
//   firstNumber = "";
//   operator = "";
//   inputField.value = "";
// });

// // Event listener for equal button
// calculateResult.addEventListener("click", function () {
//   if (firstNumber !== "" && displayValue !== "") {
//     secondNumber = displayValue;
//     let num1 = parseFloat(firstNumber);
//     let num2 = parseFloat(secondNumber);
//     switch (operator) {
//       case "+":
//         inputField.value = num1 + num2;
//         break;
//       case "-":
//         inputField.value = num1 - num2;
//         break;
//       case "×":
//         inputField.value = num1 * num2;
//         break;
//       case "÷":
//         inputField.value = num1 / num2;
//         break;
//     }
//     firstNumber = inputField.value;
//     operator = "";
//     displayValue = "";
//   }
// });
let displayValue;
const displayNum = document.querySelectorAll("#displayNum");
const inputField = document.querySelector("#input_field");

displayNum.forEach((numBtn) => {
  numBtn.addEventListener("click", function (e) {
    input_field.value += e.target.value;
  });
});

const addFunction = (result) => {
  result = displayNum + displayNum;
};
