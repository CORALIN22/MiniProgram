//strict mode is used to enfoced stricter rules and throws more exceptions to prevent common mistakes
"use strict";

//creating function for button
document.querySelector(`.calc`).addEventListener(`click`, function (event) {
  event.preventDefault();

  const billAmount = Number(document.querySelector(`.billAmount`).value);
  const tipPercentage = Number(document.querySelector(`.tipPercentage`).value);

  //Calculation happen
  const total = billAmount * (tipPercentage / 100) + billAmount;

  //If total is a whole number (integer):

  // The expression total % 1 == 0 evaluates to true.
  // ${total}.00 is assigned to finalTotal.
  // If total has decimals:

  // The expression total % 1 == 0 evaluates to false.
  // total.toFixed(2) is used to round total to two decimal places, and the result is assigned to finalTotal.
  // So, finalTotal will always have two decimal places, even if they are ".00" for whole numbers.

  const finalTotal = total % 1 == 0 ? `${total}.00` : total.toFixed(2);

  console.log(finalTotal);

  const totalTip = document.querySelector(`.totalTip`);
  totalTip.textContent = finalTotal;
});

const calc = document.querySelector(`.calc`);
calc.style.border = `none`;
