// ======== Arrays ========

// Creation
let x = [2, 4, 6, 5, 4, 4];

// Accessing & Updating
x[0] = 9; // Update index 0
console.log(x[4]); // 4

// ======== Array Methods ========
let arr = [1, 23, 5, 4, 3, 25, 79, 9, 8];

arr.push(5);       // Add to end
arr.pop();         // Remove from end

arr.shift();       // Remove from start
arr.unshift(20);   // Add at start

arr.splice(2, 3);  // Remove 3 items starting at index 2
arr.reverse();     // Reverse the array

// Slice 
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); // Prints the sliced part

// Sort numerically
arr.sort((a, b) => a - b);
console.log(arr); // Sorted array

// ======== Iteration Methods ========

// Map
let prices = [100, 200, 300];
let updatedPrices = prices.map(val => val * 1.1); // increase each by 10%
console.log(updatedPrices); // [110, 220, 330]

// Filter
let nums = [1, 2, 3, 4];
let evenNums = nums.filter(val => val % 2 === 0);
console.log(evenNums); // [2, 4]

// Reduce
let arr1 = [1, 5, 3, 2, 5, 6, 7, 9];
let sum = arr1.reduce((acc, val) => acc + val, 0);
console.log(sum); // 38

// forEach 
let ave = [1, 3, 67, 89, 7, 65, 3];
ave.forEach((val, index) => {
    ave[index] = val + 10; 
});
console.log(ave); // [11, 13, 77, 99, 17, 75, 13]

// Find
let zay = [12, 3, 45, 43, 2, 34, 5, 4, 34, 2];
let firstAbove10 = zay.find(val => val > 10);
console.log(firstAbove10); // 12

// Every
let wavy = [2, 4, 6, 8, 10, 12, 14, 20];
let allEven = wavy.every(val => val % 2 === 0);
console.log(allEven); // true

// Some
let bae = [2, 4, 12, 43, 23, 65, 42, 1, 2, 32, 4];
let hasAbove10 = bae.some(val => val > 10);
console.log(hasAbove10); // true

// ======== Destructuring & Spread ========

// Destructuring
let i = [1, 23, 12, 2, 3, 21, 3, 1, 2, 32];
let [a, b, , d] = i; // skip third element
console.log(a, b, d); // 1 23 2

// Spread
let olay = [12, 23, 1, 22, 3, 21, 2, 12];
let olay2 = [...olay]; // copy array
console.log(olay2); // [12, 23, 1, 22, 3, 21, 2, 12]
