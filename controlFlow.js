/**
 * JavaScript Control Flow
 * Author: AbuBakar Imtiaz
 */

// ============ CONTROL FLOW ============
// if, if-else, switch-case, early return pattern

// ----------- IF STATEMENT -----------
let age = 18;

if (age >= 18) {
    console.log("You are eligible");
}

// ----------- IF ELSE -----------
let marks = 45;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// ----------- ELSE IF -----------
let score = 75;

if (score < 50) {
    console.log("Fail");
} else if (score < 80) {
    console.log("Good");
} else {
    console.log("Excellent");
}

// ============ SWITCH CASE ============
let val = 2;

switch (val) {
    case 1:
        console.log("hey hey");
        break;
    case 2:
        console.log("bye bye");
        break;
    case 3:
        console.log("tik tik");
        break;
    default:
        console.log("Invalid value");
}

// ============ EARLY RETURN PATTERN ============
function getGrade(value) {
    if (value < 50) return "C";
    if (value < 80) return "B";
    return "A";
}

console.log(getGrade(79)); // B

// ----------- PRACTICE -----------
function calculateGrade(marks) {
    if (marks < 20) return "F";
    if (marks < 30) return "D";
    if (marks < 45) return "C";
    if (marks < 80) return "B";
    return "A";
}

console.log(calculateGrade(79)); // B

// ============ LOGICAL OPERATORS ============
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("Welcome Admin");
} else if (isLoggedIn) {
    console.log("Welcome User");
} else {
    console.log("Login Failed");
}

// ============ WEATHER EXAMPLE ============
let weather = "rainy";

switch (weather) {
    case "sunny":
        console.log("Wear sunglasses");
        break;
    case "rainy":
        console.log("Carry an umbrella");
        break;
    case "cold":
        console.log("Wear a jacket");
        break;
    default:
        console.log("Weather unknown");
}
