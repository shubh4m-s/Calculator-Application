const display = document.querySelector(".display .zero");
const buttons = document.querySelectorAll(".nums, .sp-btn1, .sp-btn2, .equal-to");

let currentInput = "";
let resetDisplay = false;

buttons.forEach((nums) => {
  nums.addEventListener("click", () => {
    const value = nums.textContent;

    if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    } 
    else if (value === "RESET") {
      currentInput = "";
      display.textContent = "0";
    } 
    else if (value === "=") {
      try {
        currentInput = currentInput.replace("x", "*").replace("÷", "/");
        const result = eval(currentInput);
        currentInput = result.toString();
        display.textContent = result;
        resetDisplay = true;
      }
      catch (error) {
        display.textContent = "Error";
        currentInput = "";
      }
    } 
    else {
      if (resetDisplay && !isNaN(value)) {
        currentInput = value;
        resetDisplay = false;
      }
      else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});
