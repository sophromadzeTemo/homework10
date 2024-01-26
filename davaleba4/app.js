let number = prompt("enter number:", 0);
let sum = 0;

for (i = number; i > 0; i = (i - (i % 10)) / 10) {
  sum += i % 10;
}
alert(sum);
