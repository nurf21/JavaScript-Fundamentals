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
function getOfficialName() {
  let answer = prompt('What is the "official" name of JavaScript?');
  if (answer === 'ECMAScript') {
    alert('Right!');
  } else {
    alert('You don\'t know? ECMAScript!');
  }
}

// Ask for a number and convert it to a number
function getNumber() {
  let num = +prompt("Enter a number:");
  if (isNaN(num)) {
    alert("Invalid input. Please enter a number.");
  } else if (num > 0) {
    alert(1);
  } else if (num < 0) {
    alert(-1);
  } else {
    alert(0);
  }
}

// Ask for username and password
function authenticate() {
  let username = prompt("Enter your username:", "");
  if (username === null || username === "") {
    alert("Canceled");
  } else if (username === "Admin") {
    let password = prompt("Enter password:", "");
    if (password === null || password === "") {
      alert("Canceled");
    } else if (password === "TheMaster") {
      alert("Welcome!");
    } else {
      alert("Wrong password");
    }
  } else {
    alert("I don't know you");
  }
}

// Loop
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

// Do-while loop
let numInput;
do {
  numInput = prompt("Enter a number greater than 100:", "");
  if (numInput === null || numInput === "") break; // Exit on cancel/empty input
  numInput = Number(numInput);
  if (isNaN(numInput)) {
    alert("Invalid input. Please enter a number.");
  }
} while (numInput <= 100);

// Prime number generation
function generatePrimes(n) {
  let primes = [];
  for (let num = 2; num <= n; num++) {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  return primes;
}

// Browser detection
const browser = navigator.userAgent;
if (browser.includes('Edge')) {
  alert("You've got the Edge!");
} else if (['Chrome', 'Firefox', 'Safari', 'Opera'].some(browserName => browser.includes(browserName))) {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}

// Switch statement
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

// Functions
function checkAgeTernar(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}

function checkAgeOr(age) {
  return age > 18 || confirm('Did parents allow you?');
}

function min(a, b) {
  return a < b ? a : b;
}

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

getOfficialName();
getNumber();
authenticate();
console.log(generatePrimes(10).join(', '));
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);