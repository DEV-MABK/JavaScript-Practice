
// There are two categories of data types
// 1. Primitive
// 2. Reference

// ================= PRIMITIVE DATA TYPES =================

// String
// Anything inside '', "", or `` is a string

const firstname = "AbuBakar";
let name = `Mahnoor`;
let friend = 'Ahmad';

// Numbers
let matricMarks = 1116;
const age = 18;

// Boolean
let onWay = true;
let onRest = false;

// Null
let a = null;
// null means no value at the start

// Undefined
let b;
// undefined is assigned automatically when a variable is declared but not initialized

// Symbol
let id = Symbol("id");
// Symbol creates unique values and avoids overwriting object keys

let obj = {
    name: "AbuBakar",
    age: 18,
    study: "ICS"
};

let uniqueKey = Symbol("study");
obj[uniqueKey] = "ICS Stat";

// BigInt
let maxNumber = 9007199254740991;
// This is the maximum safe integer in JavaScript

let bigNumber = 9007199254740991n;
bigNumber += 5n; // 9007199254740996n

// ================= REFERENCE DATA TYPES =================

// Object
let student = {
    name: "AbuBakar",
    age: 18
};

// Array
let subjects = ["Math", "Stat", "Computer"];

// Function
function greet() {
    console.log("Hello");
}

// ================= typeof OPERATOR =================

// typeof is used to check the data type of a value
console.log(typeof firstName); // string
console.log(typeof age);       // number
console.log(typeof a);         // object (JavaScript bug)
console.log(typeof b);         // undefined

// ================= TYPE COERCION =================

// == compares value only
// === compares value and data type

console.log(5 == "5");   // true
console.log(5 === "5");  // false

// ================= TRUTHY & FALSY VALUES =================

// Falsy values:
false, 0, null, undefined, NaN, "", document.all

// All other values are truthy

// Why is typeof NaN "number"?
// Because NaN is the result of a failed numeric operation
