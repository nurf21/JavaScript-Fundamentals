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

let answer = prompt('What is the "official" name of JavaScript?');
if (answer === 'ECMAScript') {
    alert('Right!');
} else {
    alert('You don\'t know? ECMAScript!');
}

let num = +prompt("Enter a number:");  // Convert input to a number

if (num > 0) {
    alert(1);
} else if (num < 0) {
    alert(-1);
} else {
    alert(0);
}

let username = prompt("Enter your username:", "");

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