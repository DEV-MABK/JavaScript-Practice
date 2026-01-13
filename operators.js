/**
 * JavaScript Operators
 * Author: AbuBakar Imtiaz
 */


// There are many types of operators
// 1. Arithmetic operators
// 2. Comparison operators
// 3. Assignment operators
// 4. Logical operators
// 5. Unary operators
// 6. Ternary operator
// 7. typeof

// ---------- Arithmetic Operators ----------
// + Addition
// - Subtraction
// * Multiplication
// / Division
// % Modulus
// ** Exponentiation

let a = 3, b = 5;
console.log(a + b);   // 8
console.log(a - b);   // -2
console.log(a * b);   // 15
console.log(a / b);   // 0.6
console.log(a % b);   // 3
console.log(a ** b);  // 243


// ---------- Comparison Operators ----------
// ==
// ===
// !=
// !==
// <, >, <=, >=

let c = 10, d = 5;
console.log(c == d);        // false
console.log(10 === "10");   // false
console.log(c != d);        // true
console.log(10 !== "10");   // true
console.log(c < d);         // false
console.log(c > d);         // true
console.log(c >= 10);       // true
console.log(c <= d);        // false


// ---------- Assignment Operators ----------
// =
// +=
// -=
// *=
// /=
// %=

let q = 13;
console.log(q += 2);  // 15
console.log(q -= 2);  // 13
console.log(q *= 2);  // 26
console.log(q /= 2);  // 13
console.log(q %= 2);  // 1


// ---------- Logical Operators ----------
// && AND – both conditions must be true
// || OR – at least one condition true
// !  NOT – reverses boolean value

let age = 20, hasID = true;
if (age >= 18 && hasID) {
  console.log("Allowed"); 
  // Output: "Allowed"
  // Reason: age >= 18 → true AND hasID → true
} else {
  console.log("Not Allowed");
}

let Age = 20, HasID = false;
if (Age >= 18 || HasID) {
  console.log("Allowed");
  // Output: "Allowed"
  // Reason: age >= 18 → true OR hasID → false
  // OR operator mein ek condition true ho to result true hota hai
}

let hasId = false;
if (!hasId) {
  console.log("Allowed");
  // Output: "Allowed"
  // Reason: hasId false hai
  // !false → true
}

// ---------- Unary Operators ----------
// + converts to number
// - negates value
// ++ increment
// -- decrement
// typeof checks data type

let x = "5";
console.log(+x);     // 5
console.log(typeof x); // string


// ---------- Ternary Operator ----------
// condition ? valueIfTrue : valueIfFalse

let score = 80;
let grade = score > 50 ? "Pass" : "Fail";
console.log(grade);  // Pass


// ---------- typeof Operator ----------

console.log(typeof 20);           // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object (JavaScript bug)
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof function(){}); // function
