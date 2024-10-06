// Function to perform the calculation
function calculate(operation) {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  let result;

  // Perform the operation based on the button clicked
  switch (operation) {
    case "add":
      result = number1 + number2;
      break;
    case "subtract":
      result = number1 - number2;
      break;
    case "multiply":
      result = number1 * number2;
      break;
    case "divide":
      if (number2 !== 0) {
        result = number1 / number2;
      } else {
        result = "Error: Division by zero";
      }
      break;
    default:
      result = "Invalid operation";
  }

  // Display the result
  document.getElementById("calculation-result").textContent = result;
}

// Add event listeners to the buttons
document.getElementById("add").addEventListener("click", function () {
  calculate("add");
});
document.getElementById("subtract").addEventListener("click", function () {
  calculate("subtract");
});
document.getElementById("multiply").addEventListener("click", function () {
  calculate("multiply");
});
document.getElementById("divide").addEventListener("click", function () {
  calculate("divide");
});
