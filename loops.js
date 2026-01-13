/**
 * JavaScript Loops Examples and Practice
 * Author: AbuBakar Imtiaz
 */

// Why we use loops
// Loops help us repeat code without rewriting it

// Types of loops:
// 1. for
// 2. while 
// 3. do-while
// 4. for-of – Arrays & Strings
// 5. forEach – Arrays
// 6. for-in – Objects
// 7. break and continue

// ================= FOR LOOP =================
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// ================= WHILE LOOP =================
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}

// ================= DO-WHILE LOOP =================
let j = 21;
do {
    console.log(j);
    j++;
} while (j < 20); // Executes at least once

// ================= BREAK =================
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Stops the loop when i is 3
    }
    console.log(i);
}

// ================= CONTINUE =================
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip iteration when i is 3
    }
    console.log(i);
}

// ================= PRACTICE =================

// 1. Print 1 to 10 using for
for (let y = 1; y <= 10; y++) {
    console.log(y);
}

// 2. Print even numbers between 1 to 20
let a = 1;
while (a <= 20) {
    if (a % 2 === 0) {
        console.log(a);
    }
    a++;
}

// 3. Reverse a string using a for loop
let nameStr = "Ayesha";
let reversedName = "";

for (let i = nameStr.length - 1; i >= 0; i--) {
    reversedName += nameStr[i];
}
console.log(reversedName);

// 4. Use continue to skip a specific number
let e = 1;
while (e <= 20) {
    if (e === 15) {
        e++;
        continue;
    }
    console.log(e);
    e++;
}

// 5. Pattern: Print triangle using *
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

// 6. Guess number game – Browser only
/*
let secretNumber = 8;
let guess = null;

while (guess !== secretNumber) {
    guess = Number(prompt("Enter your guess number"));
    if (guess < secretNumber) {
        console.log("Your guess number is too low");
    } else if (guess > secretNumber) {
        console.log("Your guess number is too high");
    } else {
        console.log("Correct! You guessed it!");
    }
}
*/
