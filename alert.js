// Display message using external JavaScript
document.getElementById('message').textContent = "I'm JavaScript!";

// Declare variables
let admin, name;

// Assign value to name
name = "John";

// Copy value from name to admin
admin = name;

// Display admin value using alert
alert(admin);  // Shows "John" in an alert box

// Planet name (constant value)
const ourPlanet = "Earth";

// Current visitor (variable that might change)
let currentUserName = "John";

// Usage example
alert(`Welcome to ${ourPlanet}, ${currentUserName}!`);

// Ask for the "official" name of JavaScript
let answer = prompt('What is the "official" name of JavaScript?');

// Check the answer
if (answer === 'ECMAScript') {
  alert('Right!');
} else {
  alert('You don\'t know? ECMAScript!');
}

// Ask for a number and convert it to a number
let num = +prompt("Enter a number:");

// Check the number
if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}

// Ask for username and password
let username = prompt("Enter your username:", "");

// Check the username
if (username === "Admin") {
  let password = prompt("Enter password:", "");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === null || password === "") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (username === null || username === "") {
  alert("Canceled");
} else {
  alert("I don't know you");
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

let numInput;
do {
  numInput = prompt("Enter a number greater than 100:", "");
  if (numInput === null || numInput === "") break; // Exit on cancel/empty input
  numInput = Number(numInput);
  if (isNaN(numInput)) {
    alert("Invalid input. Please enter a number.");
  }
} while (numInput <= 100);

let n = prompt("Enter a number:", 10);
let primes = [];

for (let num = 2; num <= n; num++) {
  let isPrime = true;
  // Check divisors up to square root of num
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) primes.push(num);
}

console.log(primes.join(', '));

if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if (['Chrome', 'Firefox', 'Safari', 'Opera'].includes(browser)) {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}

let a = +prompt('a?', '');
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
  default:
    alert('Invalid input');
}