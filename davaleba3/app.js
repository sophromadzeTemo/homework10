let num = prompt("Enter a numbe: ");

while (isNaN(num)) {
  alert("it's not a number, try again");
  num = prompt("Enter a numbe: ");
}
