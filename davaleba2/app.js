let x = prompt("Enter First number: ", 0);
let y = prompt("Enter Second number: ", 0);
let z = prompt("Enter +, -, * or /: ");
let result;

if (z === "+") {
  result = +x + +y;
  if (!isNaN(result)) {
    alert(result);
  } else {
    alert("You didn't enter numbers");
  }
} else if (z === "-") {
  result = x - y;
  if (!isNaN(result)) {
    alert(result);
  } else {
    alert("You didn't enter numbers");
  }
} else if (z === "*") {
  result = x * y;
  if (!isNaN(result)) {
    alert(result);
  } else {
    alert("You didn't enter numbers");
  }
} else if (z === "/") {
  if (y != "0") {
    result = x / y;
    if (!isNaN(result)) {
      alert(result);
    } else {
      alert("You didn't enter numbers");
    }
  } else {
    alert("Cannot divide by zero");
  }
} else {
  alert("You entered an invalid operator");
}
