const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function scientific(func) {
  const value = parseFloat(display.value);

  switch (func) {
    case "sqrt":
      display.value = Math.sqrt(value);
      break;
    case "sin":
      display.value = Math.sin(value * (Math.PI / 180)); // Convert to radians
      break;
    case "cos":
      display.value = Math.cos(value * (Math.PI / 180)); // Convert to radians
      break;
    case "tan":
      display.value = Math.tan(value * (Math.PI / 180)); // Convert to radians
      break;
    case "log":
      display.value = Math.log10(value);
      break;
    case "exp":
      display.value = Math.exp(value);
      break;
    case "pi":
      display.value = Math.PI;
      break;
  }
}